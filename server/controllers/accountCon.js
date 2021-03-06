const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const sequelize = require("../models");
const Content = require("../models/content");
const Plan = require("../models/plan");
const Task = require("../models/task");
const User = require("../models/user");
const Reason = require("../models/reason");
const Challenge = require("../models/challenge");
const Record = require("../models/record");

exports.postVerification = async (req, res) => {
  try {
    const session = req.session;
    const userEmail = session.user.email;
    const user = await User.findOne({ where: { email: userEmail } });

    const password = req.body.password;
    const compared_password = await bcrypt.compare(password, user.password);
    if (compared_password) {
      res.status(200).json({ msg: "Checked User" });
    } else {
      res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    throw new Error();
  }
};
exports.postVerifyEmail = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.findOne({ where: { email: userEmail } });
    if (!user) {
      return res.status(400).json({ msg: "존재하지 않는 이메일입니다" });
    } else {
      return res.status(200).json({ msg: "check user existed" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.patchPassword = async (req, res) => {
  try {
    const userEmail = req.body.user;
    const user = await User.findOne({ where: { email: userEmail } });
    const updatedPassword = req.body.updatedPassword;
    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      const param = result.errors[0].param;
      const msg = result.errors[0].msg;
      const error = { param: param, msg: msg };

      res.status(400).json(error);
    } else {
      const salt = bcrypt.genSaltSync(16);
      await User.update(
        { ...user, password: bcrypt.hashSync(updatedPassword, salt) },
        { where: { email: userEmail } }
      );
      res.status(201).json({ msg: "Password has been changed successfully" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.postDeleteAccount = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const userEmail = req.session.user.email;
      // 비밀번호 확인
      const user = await User.findOne(
        { where: { email: userEmail } },
        { transaction: t }
      );
      const password = req.body.password;
      const compared_password = await bcrypt.compare(password, user.password);

      // 비밀번호 일치시 데이터 삭제
      if (compared_password) {
        //* task 리스트 삭제 *//
        await Task.destroy(
          { where: { userId: userEmail } },
          { transaction: t }
        );

        //* plan && content 삭제 *//
        const plans = await Plan.findAll(
          { where: { writer: userEmail } },
          { transaction: t }
        );
        if (plans) {
          for (const plan of plans) {
            await Content.destroy(
              { where: { planId: plan.id } },
              { transaction: t }
            );
            await Plan.destroy({ where: { id: plan.id } }, { transaction: t });
          }
        }

        //* Challenge && Record 삭제 *//
        const challenges = await Challenge.findAll(
          {
            where: { challenger: userEmail },
          },
          { transaction: t }
        );
        if (challenges) {
          for (const challenge of challenges) {
            await Record.destroy(
              {
                where: { challengeTitle: challenge.title },
              },
              { transaction: t }
            );
            await Challenge.destroy(
              { where: { id: challenge.id } },
              { transaction: t }
            );
          }
        }
        //* 사유 저장 *//
        await Reason.create(
          {
            deleteReason: req.body.reason,
            account: userEmail,
          },
          { transaction: t }
        );
        //* 계정 삭제 *//
        await User.destroy({ where: { email: userEmail } }, { transaction: t });
        //* 세션 삭제 *//
        req.session.destroy();
        res.status(201).json({ msg: "Account has been deleted successfully" });
      } else {
        res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
      }
    });
  } catch (error) {
    throw new Error();
  }
};

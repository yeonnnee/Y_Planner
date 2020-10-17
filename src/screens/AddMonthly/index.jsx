import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import AddMonthlyPresenter from "./AddMonthlyPresenter";
import { monthlyApi } from "../../api";
import { CREATE_MONTHLY, FAILED } from "../../redux/types";

const MonthlyAdd = (monthlyAddProps) => {
  const { state, history, create, failed } = monthlyAddProps;

  const [planList, setPlanList] = useState({
    id: "",
    date: state.date,
    contents: [],
  });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });
  function cancel() {
    history.push("/monthly");
  }
  async function save() {
    try {
      await monthlyApi.postPlan(planList);
      create(planList);
      history.push("/monthly");
    } catch (error) {
      failed(error);
    }
  }

  function deleteItem(event) {
    const target = event.target.parentNode.id;
    const filteredPlanList = planList.contents.filter(
      (plan) => plan.id !== target
    );
    setPlanList({ ...planList, contents: [...filteredPlanList] });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (content.text !== "") {
      setPlanList({
        ...planList,
        id: uuidv4().toString(),
        contents: [...planList.contents, content],
      });
      setContent({
        text: "",
        error: "",
      });
    }
  }

  function onChange(event) {
    const value = event.target.value;
    setContent({
      id: uuidv4().toString(),
      text: value,
      error: "",
    });
  }

  return (
    <AddMonthlyPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      save={save}
      planList={planList}
      content={content}
      cancel={cancel}
      {...state}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    create: (plan) => {
      dispatch({ type: CREATE_MONTHLY, payload: plan });
    },
    failed: (error) => {
      dispatch({ type: FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyAdd);
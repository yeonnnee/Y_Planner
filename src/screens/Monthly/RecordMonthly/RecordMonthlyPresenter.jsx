import React from "react";

import Header from "../../../components/Header";
import MonthlyRecordForm from "../MonthlyRecordForm/MonthlyRecordFormInputContainer";
import MonthlyRecordFormContent from "../MonthlyRecordForm/MonthlyRecordFormContent";
import DeleteConfirmModal from "../../../components/Modal";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Button, Section, Wrapper, ListSection } from "./RecordMonthly.styles";
import { DeleteBtn } from "../MonthlyRecordForm/styles";

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    cancel,
    deleteListItem,
    selectTime,
    planList,
    editPlanList,
    content,
    location,
    selectedDate,
    deleteMonthly,
    modalStatus,
    confirmDelete,
  } = monthlyProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            {location.pathname.includes("edit") ? (
              <DeleteBtn onClick={confirmDelete}>삭제하기</DeleteBtn>
            ) : null}

            {modalStatus !== "hidden" && location.pathname.includes("edit") ? (
              <DeleteConfirmModal
                confirm={deleteMonthly}
                cancel={cancel}
                message="정말 삭제하시겠습니까?"
              />
            ) : null}

            <MonthlyRecordForm
              onChange={onChange}
              onSubmit={onSubmit}
              selectTime={selectTime}
              text={content.text}
              error={content.error}
              selectedDate={selectedDate}
            />

            <ListSection>
              {location.pathname.includes("edit") ? (
                <MonthlyRecordFormContent
                  contents={editPlanList.contents}
                  deleteListItem={deleteListItem}
                />
              ) : (
                <MonthlyRecordFormContent
                  contents={planList.contents}
                  deleteListItem={deleteListItem}
                />
              )}
            </ListSection>
            <Section>
              <Button onClick={save}>Save</Button>
              <Button onClick={cancel}>Cancel</Button>
            </Section>
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};

export default AddMonthlyPresenter;

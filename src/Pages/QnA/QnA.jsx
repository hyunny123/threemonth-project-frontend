import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { USER_TOKEN } from "../../config";
import Loading from "../../components/Loading";

const QnA = () => {
  const navigate = useNavigate();
  const [qnaCommentValue, setQnaCommentValue] = useState("");
  const qnaCommentHandle = (e) => {
    const { name, value } = e.target;
    setQnaCommentValue({ ...qnaCommentValue, [name]: value });
  };
  const [qnaDetail, setQnaDetail] = useState({
    id: 0,
    content: "",
    title: "",
  });
  const { qnaId } = useParams();
  useEffect(() => {
    axios
      .get(`http://15.164.163.31:8001/announcements/QnA/${qnaId}`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setQnaDetail(res.data));
  }, [qnaId]);
  const { content, title, qna_comments } = qnaDetail;
  const [qnaComment, setQnaComment] = useState(qna_comments);
  if (qnaDetail.id === 0) {
    return <Loading />;
  }
  const QnADetailInput = () => {
    return {
      __html: content,
    };
  };
  const postComment = () => {
    axios
      .post(
        `http://15.164.163.31:8001/announcements/QnA/${qnaId}/comments`,
        { content: qnaCommentValue.comment },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          // setQnaComment([...qnaComment, res.data]);
          window.location.reload();
        }
      });
  };
  console.log(qnaDetail);
  return (
    <QnADetailWrap>
      <QnADetailWidth>
        <QnADetailTitle>{title}</QnADetailTitle>
        <QnADetailContent dangerouslySetInnerHTML={QnADetailInput()} />
        <QnADetailBtnWrap>
          <QnADetailEditBtn>수정</QnADetailEditBtn>
          <QnADetailEditBtn>삭제</QnADetailEditBtn>
        </QnADetailBtnWrap>
        <QnACommentWrap>
          <QnACommentInputWrap>
            <QnACommentInput
              name="comment"
              onChange={qnaCommentHandle}
              placeholder="댓글을 입력해 주세요"
            />
            <PostCommentBtn onClick={postComment}>댓글 입력</PostCommentBtn>
          </QnACommentInputWrap>
          {qna_comments.map((x, idx) => (
            <QnACommentContents key={idx}>
              <QnACommentContent>{x.id}</QnACommentContent>
              <QnACommentContent>{x.content}</QnACommentContent>
              <QnACommentContent>{x.created_at.slice(0, 10)}</QnACommentContent>
            </QnACommentContents>
          ))}
        </QnACommentWrap>
      </QnADetailWidth>
    </QnADetailWrap>
  );
};

export default QnA;

const QnADetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const QnADetailWidth = styled.div`
  width: 85%;
  min-height: 400px;
`;
const QnADetailTitle = styled.p`
  box-sizing: border-box;
  padding: 20px;
  font-size: 20px;
`;
const QnADetailContent = styled.div`
  box-sizing: border-box;
  padding: 20px;
  min-height: 200px;
  border: 4px solid ${({ theme }) => theme.bgColor};
`;
const QnADetailBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 30px 0;
  /* border: 1px solid red; */
`;
const QnADetailEditBtn = styled.button`
  border-style: none;
  width: 100px;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
  &:nth-child(2) {
    margin-left: 20px;
  }
`;
const QnACommentWrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const QnACommentInputWrap = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 8fr 1fr;
  place-items: center;
  margin-bottom: 20px;
`;
const QnACommentInput = styled.input`
  border-style: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  font-family: ${({ theme }) => theme.fontFamily};
`;
const PostCommentBtn = styled.button`
  border-style: none;
  width: 70%;
  height: 100%;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const QnACommentContents = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 8fr 1fr;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 5fr;

    padding: 10px;
  }
`;
const QnACommentContent = styled.p`
  display: grid;
  &:nth-child(3) {
    justify-items: flex-end;
  }
  @media (max-width: 500px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;

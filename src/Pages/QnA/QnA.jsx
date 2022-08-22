import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { USER_TOKEN } from "../../config";
import Loading from "../../components/Loading";

const QnA = () => {
  const { qnaId } = useParams();
  const [qnaDetail, setQnaDetail] = useState({
    id: 0,
    content: "",
    title: "",
  });
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
  const navigate = useNavigate();
  const [qnaCommentValue, setQnaCommentValue] = useState("");
  const qnaCommentHandle = (e) => {
    const { name, value } = e.target;
    setQnaCommentValue({ ...qnaCommentValue, [name]: value });
  };
  const { content, title, qna_comments } = qnaDetail;
  // const [qnaCommentList, setQnaCommentList] = useState(qna_comments);
  // console.log(qna_comments);
  // console.log(qnaCommentList);
  if (qnaDetail.id === 0) {
    return <Loading />;
  }
  const QnADetailInput = () => {
    const sortValue = content.replace(/\n/g, "<br>\n");
    return {
      __html: sortValue,
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
        // console.log(res.data);
        if (res.status === 201) {
          // setQnaCommentList([qna_comments, res.data]);
          window.location.reload();
        }
      });
  };
  return (
    <QnADetailWrap>
      <QnADetailWidth>
        <QnADetailTitle>{title}</QnADetailTitle>
        <QnADetailContent dangerouslySetInnerHTML={QnADetailInput()} />
        <QnADetailBtnWrap>
          <QnADetailEditBtn
            onClick={() => {
              navigate(`/qna/${qnaId}/edit`, { state: { data: qnaDetail } });
            }}
          >
            수정
          </QnADetailEditBtn>
          <QnADetailEditBtn
            onClick={() => {
              if (window.confirm("삭제하시겠습니까?")) {
                axios
                  .delete(
                    `http://15.164.163.31:8001/announcements/QnA/${qnaId}`,
                    {
                      headers: {
                        Authorization: `Bearer ${USER_TOKEN}`,
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((res) => {
                    if (res.status === 204) {
                      alert("삭제되었습니다.");
                      navigate("/qnalist");
                    }
                  });
              }
            }}
          >
            삭제
          </QnADetailEditBtn>
        </QnADetailBtnWrap>
        <QnACommentWrap>
          {qna_comments &&
            qna_comments.map((x, idx) => (
              <QnACommentContents key={idx}>
                <QnACommentContent>{x.id}</QnACommentContent>
                <QnACommentContent>{x.content}</QnACommentContent>
                <QnACommentContent>
                  {x.created_at.slice(0, 10)}
                </QnACommentContent>
                <QnACommentContent>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => {
                      if (window.confirm("삭제하시겠습니까?")) {
                        axios
                          .delete(
                            `http://15.164.163.31:8001/announcements/QnA/${qnaId}/comments/${x.id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${USER_TOKEN}`,
                                "Content-Type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            if (res.status === 204) {
                              window.location.reload();
                            }
                          });
                      }
                    }}
                  />
                </QnACommentContent>
              </QnACommentContents>
            ))}
          <QnACommentInputWrap>
            <QnACommentInput
              name="comment"
              onChange={qnaCommentHandle}
              placeholder="댓글을 입력해 주세요"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  postComment();
                }
              }}
            />
            <PostCommentBtn onClick={postComment}>댓글 입력</PostCommentBtn>
          </QnACommentInputWrap>
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
`;
const QnADetailEditBtn = styled.button`
  border-style: none;
  width: 100px;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
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
  grid-template-columns: 0.3fr 8fr 1fr 0.5fr;
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
  &:last-child {
    justify-items: flex-end;
  }
  i {
    font-size: 20px;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;

import "./App.css";
import { useState } from "react";

const formatDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}/${month}/${day}`;

  return formattedDate;
};

function App() {
  let post = "개발 블로그";
  const [list, setList] = useState([
    {
      title: "인천 맛집",
      date: "2023/01/08",
      likes: 0,
      content: "인천에 맛집은 여기!",
    },
    {
      title: "강남 맛집",
      date: "2023/04/07",
      likes: 0,
      content: "강남에 맛집은 여기!",
    },
    {
      title: "수원 맛집",
      date: "2024/01/04",
      likes: 0,
      content: "수원에 맛집은 여기!",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDate, setModalDate] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [value, setValue] = useState("");

  const clickCountHandler = (index) => {
    const newList = [...list];
    newList[index].likes += 1;
    setList(newList);
  };

  const clickOrderByHandler = () => {
    const newList = [...list];
    const sortedInfo = newList.sort((a, b) => a.title.localeCompare(b.title));
    setList(sortedInfo);
  };

  const setModal = (index) => {
    const { title, date, content } = list[index];
    setOpen(!open);
    setModalTitle(title);
    setModalDate(date);
    setModalContent(content);
  };

  const changeValueHandler = (val) => {
    setValue(val);
  };

  const addList = () => {
    const newList = [...list];
    const listParams = {
      title: value,
      date: formatDate(),
      likes: 0,
      content: "새로운 글 탄생",
    };
    newList.push(listParams);
    setList(newList);
  };

  const removeList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const OrderByList = () => {
    return (
      <div>
        <button onClick={clickOrderByHandler}>제목순 정렬</button>
      </div>
    );
  };

  const ItemList = () => {
    return (
      <div>
        {list.map((item, index) => (
          <div className="list" key={index}>
            <h4>
              <span className="custor__pointer" onClick={() => setModal(index)}>
                {item.title}
              </span>{" "}
              <span
                className="cursor__pointer"
                onClick={() => clickCountHandler(index)}
              >
                👍
              </span>
              {item.likes}
            </h4>
            <p>{item.date}</p>
            <span className="cursor__pointer" onClick={() => removeList(index)}>
              🗑️
            </span>
          </div>
        ))}
      </div>
    );
  };

  const Modal = (props) => {
    return (
      <div className="modal" style={{ background: props.theme }}>
        <h4>{modalTitle}</h4>
        <p>{modalDate}</p>
        <p>{modalContent}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      <OrderByList />
      <ItemList />
      <div>
        <input
          type="text"
          onChange={(e) => changeValueHandler(e.target.value)}
          value={value}
        />
        <button type="button" onClick={addList}>
          행 추가
        </button>
      </div>

      {open && <Modal theme={"antiquewhite"} />}
    </div>
  );
}

export default App;

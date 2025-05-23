import { Button } from "antd";
import React from "react";

const Detail = ({ item, setIsList }) => {
  const labels = [
    {
      title: "名称",
      key: "name",
    },
    {
      title: "全称",
      key: "full_name",
    },
    {
      title: "链接",
      key: "html_url",
    },
    {
      title: "描述",
      key: "description",
    },
  ];
  return (
    <>
      <Button onClick={() => setIsList(true)}>返回列表</Button>
      {labels.map((label) => {
        return (
          <div key={label.key}>
            <h1>{label.title}</h1>
            <p>{item[label.key]}</p>
          </div>
        );
      })}
    </>
  );
};

export default Detail;

import { useState } from "react";
import useFetch from "../hooks/useFetch";

import { Input, Button, Flex, Table, Result } from "antd";

function List({ setItem, setIsList }) {
  const [searchValue, setSearchValue] = useState("");
  const { run, data, error, loading } = useFetch({ q: searchValue });

  const handleClick = (item) => {
    setItem(item);
    setIsList(false);
  };
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "全称",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "链接",
      dataIndex: "html_url",
      key: "html_url",
      render: (text, record, index) => {
        return <a onClick={() => handleClick(record)}>{text}</a>;
      },
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
  ];
  const getData = () => {
    if (searchValue) {
      run(`https://api.github.com/search/repositories?q=${searchValue}`);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></Input>
          <Button disabled={!searchValue} onClick={getData}>
            查询
          </Button>
        </Flex>
      </div>
      <div style={{ width: "100%", height: "800px", paddingTop: "20px" }}>
        {error ? (
          <Result
            status="error"
            title="加载失败"
            subTitle="请检查网络或稍后重试"
            extra={[
              <Button type="primary" onClick={getData}>
                重试
              </Button>,
            ]}
          />
        ) : (
          <Table
            loading={loading}
            error
            pagination={false}
            dataSource={data?.items}
            columns={columns}
          />
        )}
      </div>
    </>
  );
}

export default List;

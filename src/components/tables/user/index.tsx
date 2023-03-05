import { Button, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import type { PaginationProps } from 'antd';
import { IUser } from "../../../interfaces/IUser";
import * as Styled from "./styles";

interface IProps {
  users: IUser[];
  // viewFunction: Function;
}

export function UserTable(props: IProps) {
  //const navigate = useNavigate();
console.log(props.users);

  const columns: ColumnsType<IUser> = [

    {
      key: "name",
      title: "Name",
      width: "30%",
      dataIndex: "name",
    },

    {
      key: "email",
      title: "Email",
      width: "30%",
      render: (_text, record) => (
        <Space size="middle">
          { record.email }

        </Space>
      )
    },

    {
      key: "action",
      title: "Ações",
      width: "40%",
      render: (_text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={(data) => {
              // props.viewFunction(record.formId);
            }}
          >
            Desabilitar
          </Button>
          {/* <Button
            type="primary"
            className="primary-green"
          >
            Teste
          </Button> */}
        </Space>
      ),  
    },

  ];

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Próximo</a>;
    }
    if (type === 'next') {
      return <a>Anterior</a>;
    }
    return originalElement;
  };
  
  return (
    <Styled.TableCustom
        columns={columns}
        dataSource={props.users}
        rowKey="id"
        pagination={{
          // showTotal: (total, range) => `${range[0]}-${range[1]} de ${total} usuários`,
          defaultPageSize: 15,
          defaultCurrent: 1,
          itemRender: itemRender,
          position: ["bottomCenter"],

        }}
      />
  );
}

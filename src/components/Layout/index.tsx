import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import * as S from "./styles";
import * as Icon from "@ant-design/icons";
import { useContextAuth } from "../../context/auth/useContextAuth";
import Logo from "../../assets/images/logo.svg";
import { BreadCrumb } from "../BreadCrumb";


interface IProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<IProps> = ({ children }) => {

  const navigate = useNavigate();
  const { user, logout } = useContextAuth();

  // console.log(user?.roles)


  // const menuItems = [
  //   {
  //     key: 'home',
  //     icon: <HomeOutlined />,
  //     label: 'Home',
  //     onClick: () => navigate('/home')
  //   },
  //   {
  //     key: 'center',
  //     icon: <UserOutlined />,
  //     label: 'Usuários',
  //     children: [
  //       {
  //         key:'companies',
  //         icon: <SettingOutlined />,
  //         label: 'Empresas',
  //         onClick: () => navigate('/companies')
  //       },
  //       {
  //         key:'couriers',
  //         icon: <SettingOutlined />,
  //         label: 'Entregadores',
  //         onClick: () => navigate('/couriers')
  //       }
  //     ],   
  //   },
  //   {
  //     key: 'settings',
  //     icon: <SettingOutlined />,
  //     label: 'Configurações',
  //     onClick: () => navigate('/settings')
  //   },

  // ];

  const navigateToPage = (route: any) => {
    navigate("/" + route?.key);
  }

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    onClick?: Function,
    children?: MenuItem[],

  ): MenuItem {
    return {
      label,
      key,
      icon,
      onClick,
      children,

    } as MenuItem;
  }

  const admItems: MenuItem[] = [
    getItem('Home', 'home', <Icon.HomeOutlined />, navigateToPage),
    getItem('Usuários', 'users', <Icon.UserOutlined />, navigateToPage),
    getItem(
      <Link to="/settings">Configurações</Link>,
      'settings',
      <Icon.SettingOutlined />,
      // navigateToPage
    )

    //getItem('Usuários', 'sub1', <UserOutlined />, navigateToPage, 
    // [
    //   getItem('Empresas', 'index'),
    //   getItem('Entregadores',  'home3'),
    // ]
    //),
  ];

  const userItems: MenuItem[] = [
    getItem('Home', 'home', <Icon.HomeOutlined />, navigateToPage),
    getItem('Configurações', 'settings', <Icon.SettingOutlined />, navigateToPage),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="">
      <S.MainHeader>
        <S.HeaderContainer>
          <S.LogoContainer>
            <S.Logo src={Logo} alt="Logo Delivery manager" />
          </S.LogoContainer>

          <S.ContainerUser>
            <S.ProfileName>{user?.name}</S.ProfileName>
            <S.LogoutButton onClick={logout} type="ghost"><Icon.LogoutOutlined /></S.LogoutButton>
          </S.ContainerUser>
        </S.HeaderContainer>
      </S.MainHeader>
      <Layout style={{ background: "var(--background)" }}>
        <S.SideCustom collapsible>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={!user?.roles.includes("ADM") ? userItems : admItems} />
        </S.SideCustom>

        <Layout style={{ padding: "0 24px 7px", background: "var(--background)" }}>
          <S.BreadcrumbCustom>
            <BreadCrumb />
          </S.BreadcrumbCustom>
          <S.ContentCustom>
            {children}
          </S.ContentCustom>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

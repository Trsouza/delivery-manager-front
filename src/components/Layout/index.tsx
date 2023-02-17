import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import * as Styled from "./styles";
import * as Icon from "@ant-design/icons";
import { useContextAuth } from "../../context/auth/useContextAuth";
import Logo from "../../assets/images/logo.svg";

interface IProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<IProps> = ({ children }) => {
  
  const navigate = useNavigate();
  const { user, logout } = useContextAuth();


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
     navigate("/"+route?.key);
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

  const items: MenuItem[] = [
    getItem('Home',  'home', <Icon.HomeOutlined />, navigateToPage),
    getItem('Usuários',  'users', <Icon.UserOutlined />, navigateToPage),
    getItem('Configurações',  'settings', <Icon.SettingOutlined />, navigateToPage),

    //getItem('Usuários', 'sub1', <UserOutlined />, navigateToPage, 
    // [
    //   getItem('Empresas', 'index'),
    //   getItem('Entregadores',  'home3'),
    // ]
    //),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="">
      <Styled.MainHeader>
        <Styled.HeaderContainer>
          <Styled.LogoContainer>
            <Styled.Logo src={Logo} alt="Logo Delivery manager" />
          </Styled.LogoContainer>

          <Styled.ContainerUser>
            <Styled.ProfileName>{user?.name}</Styled.ProfileName>
            <Styled.LogoutButton onClick={logout} type="ghost"><Icon.LogoutOutlined /></Styled.LogoutButton>
          </Styled.ContainerUser>
        </Styled.HeaderContainer>
      </Styled.MainHeader>
      <Layout style={{ background: "var(--background)" }}>
        <Styled.SideCustom collapsible>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Styled.SideCustom>

        <Layout style={{ padding: "0 24px 7px", background: "var(--background)" }}>
          <Styled.BreadcrumbCustom>
            <Breadcrumb.Item><Icon.HomeOutlined /></Breadcrumb.Item>
          </Styled.BreadcrumbCustom>
          <Styled.ContentCustom>
            {children}
          </Styled.ContentCustom>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

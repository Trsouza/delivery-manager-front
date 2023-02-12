import styled from "styled-components";
import { Button, Layout, Breadcrumb } from "antd";

const { Header, Sider } = Layout;
const { Content } = Layout;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 2.8rem;
`;

export const ProfileName = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--blue-601);
`;

export const LogoutButton = styled(Button)`
  font-size: 15px;
  color: var(--white);
`;

export const MainHeader = styled(Header)`
  background: var(--blue-800) !important;
  padding-inline-start: 60px !important;
  padding-inline-end: 12px !important;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BreadcrumbCustom = styled(Breadcrumb)`
  width: 100%;
  background: var(--white);
  padding: 8px 15px;
  margin: 7px 0;
  border-radius: 20px;
  box-shadow: 1px 1px 5px var(--gray-300);
`;

export const SideCustom = styled(Sider)`
  background: var(--white) !important;
  margin-top: 5px;
  border-top: 1px solid var(--gray-300);
  border-left: 1px solid var(--gray-300);
  border-right: 1px solid var(--gray-300);
  box-shadow: 1px 1px 5px var(--gray-300);

  border-radius: 20px;
  margin-left: 2px;
  margin-bottom: 6px;

  .ant-layout-sider-trigger {
    color: var(--orange-600);
    font-size: 1.2rem;
    background: var(--white);
    /* border: 1px solid; */
    border-radius: 20px;
    margin-bottom: 8px ;
    width: 68px !important;
    margin-left: 5px;
  }

  .ant-layout-sider-trigger:hover {
    color: var(--white);
    background: var(--orange-700);
  }

  /* .ant-dropdown-menu {
    margin-right: 1.5rem;
    min-width: 7.5rem;
    min-height: 2.5rem;
    color: var(--black);
  }

  .ant-dropdown-menu-item {
    clear: both;
    margin: 0;
    padding: 0.3rem 0.75rem;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.4rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  } */

  .ant-layout-sider-children {
    background: var(--white);
    border-radius: 20px;
  }

  .ant-menu-inline > .ant-menu-item-selected {
    background-color: var(--orange-600)!important;
  }

  .ant-menu-inline > .ant-menu-item-selected:hover {
    background-color: var(--orange-700)!important;
    padding: 20px;
  }

  .align-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .center_div {
    text-align: center;
  }
  
  .ant-menu-item {
    border-radius: 20px;
  }

  /* .ant-menu-submenu-title:hover {
    background: var(--orange-800);
  }


  .ant-menu-dark > .ant-menu-item-selected {
    background: var(--orange-600);
  } */

  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    color: var(--orange-600);
    background: var(--white);
    border-radius: 20px;
  }

  /* .ant-menu.ant-menu-dark:hover, */
  .ant-menu-item:hover {
    color: var(--white);
    background: var(--orange-700) !important;
  }

`;

export const ContainerUser = styled.div`
  align-items: center;
`;

export const ContentCustom = styled(Content)`
  padding: 24px;
  border-radius: 20px;
  background: var(--white);
  margin: 0;
  box-shadow: 1px 1px 5px var(--gray-300);
`;

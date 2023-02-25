
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export function BreadCrumb() {
  const breadcrumbNames: any = {
    "/users": "Usuários",
    "/settings": "Configurações",
    "/users/edit": "Editar Usuário",
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((item) => item);

  const isNumber = (value: any) => {
    return !isNaN(value) && isFinite(value);
  }

  const breadcrumbWithLink = (name: string, url: string) => {
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {isNumber(name) ? `${name}` : breadcrumbNames[url]}
        </Link>
      </Breadcrumb.Item>
    );
  }

  const breadcrumbNoLink = (name: string, url: string) => {
    return (
      <Breadcrumb.Item key={url}>
        {isNumber(name) ? `${name}` : breadcrumbNames[url]}
    </Breadcrumb.Item>
    );
  }

  const extraBreadcrumbItems = pathSnippets.map((name, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    if (url === "/") {
      return (
        <Breadcrumb.Item key={url}> {breadcrumbNames[url]}</Breadcrumb.Item>
      );
    }

    if (isNumber(pathSnippets[index]) || pathSnippets[0] === "home") {
      return (
        <Breadcrumb.Item key={url}>
          {breadcrumbNames[url]}
        </Breadcrumb.Item>
      );
    }

    if (pathSnippets.length > 2) {
      if(index !== pathSnippets.length-2 ){
        return breadcrumbWithLink(name, url);
      }else{
        return breadcrumbNoLink(name, url);
      }
    } else{
      if (index === pathSnippets.length-2 && !isNumber(pathSnippets[1]) ) {
        return breadcrumbWithLink(name, url);
      } else  {
        return breadcrumbNoLink(name, url);
      }
    }

  });

  const breadCrumbItems = [
    <Breadcrumb.Item key="Home">
      <Link to="/home">
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadCrumbItems}</Breadcrumb>;
}

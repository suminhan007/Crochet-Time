import { LandFlex, LandHeader } from "@suminhan/land-design";
import { useCallback, useState } from "react";
import Idea from "./Idea";
import Design from "./Design";
import StoreHouse from "./StoreHouse";
import FloatingProfileBtn from "./components/FloatingProfileBtn";
import axios from "axios";
type userType = {};
export default function Editor() {
  const [activePage, setActivePage] = useState<number | string>(2);
  const [user, setUser] = useState<userType>();
  const handleLogin = useCallback(async (account: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        account,
        password,
      });
      console.log(response.data);
      // 处理登录成功后的逻辑
    } catch (error) {
      console.error(error);
      // 处理登录失败的逻辑
    }
  }, []);

  const hanldeRegister = useCallback(
    async (username: string, account: string, password: string) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/register",
          { username, account, password }
        );
        console.log(response.data);
        // 处理注册成功后的逻辑
      } catch (error) {
        console.error(error);
        // 处理注册失败的逻辑
      }
    },
    []
  );
  return (
    <LandFlex column className="relative height-100">
      <LandHeader
        name={<div className="fs-20 fw-500"></div>}
        menuProps={{
          data: [
            { key: 1, title: "灵感" },
            { key: 2, title: "工作台" },
            { key: 3, title: "仓库" },
          ],
          active: activePage,
          onChange: (item) => setActivePage(item.key),
        }}
        align="center"
      />
      {activePage === 1 && <Idea />}
      {activePage === 2 && <Design />}
      {activePage === 3 && <StoreHouse />}
      <FloatingProfileBtn
        onLoginClick={handleLogin}
        OnRegisterClick={hanldeRegister}
      />
    </LandFlex>
  );
}

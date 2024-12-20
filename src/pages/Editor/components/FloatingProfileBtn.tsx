import {
  LandAvatar,
  LandButton,
  LandDialog,
  LandFlex,
  LandInput,
  LandMenu,
} from "@suminhan/land-design";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  logined?: boolean;
  username?: string;
  onLoginClick?: (account: string, password: string) => void;
  OnRegisterClick?: (
    username: string,
    account: string,
    password: string
  ) => void;
  onClick?: () => void;
};
const FloatingProfileBtn: React.FC<Props> = ({
  logined,
  username,
  onLoginClick,
  OnRegisterClick,
  onClick,
}) => {
  const [showDialog, setShowDialog] = useState<number | string>(1);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [accountInput, setAccountInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  return (
    <>
      <StyledFloatingBtn className="absolute bottom-0 right-0 p-12 content-box overflow-hidden">
        <div className="floating-content flex items-center justify-center p-12 radius-6 height-100 border">
          {logined ? (
            <div onClick={onClick}>
              <LandAvatar size={32} name={username} />
            </div>
          ) : (
            <LandFlex column gap={12} bothCenter>
              <LandButton onClick={() => setShowDialog(1)}>登录</LandButton>
              <LandButton
                onClick={() => setShowDialog(2)}
                type="background"
                status="primary"
              >
                注册
              </LandButton>
            </LandFlex>
          )}
        </div>
      </StyledFloatingBtn>

      <LandDialog
        show={Number(showDialog) > 0}
        mask
        onClose={() => setShowDialog(-1)}
        onCancel={() => setShowDialog(-1)}
        onSubmit={() => {
          if (showDialog === 1) {
            onLoginClick?.(accountInput, passwordInput);
          }
          if (showDialog === 2) {
            OnRegisterClick?.(usernameInput, accountInput, passwordInput);
          }
        }}
        title={
          <LandMenu
            data={[
              { key: 1, title: "登录" },
              { key: 2, title: "注册" },
            ]}
            active={showDialog}
            border={false}
            onChange={(item) => setShowDialog(item.key)}
          />
        }
      >
        <LandFlex column gap={20} style={{ height: "148px" }}>
          {showDialog === 2 && (
            <LandInput
              prefix="用户名: "
              value={usernameInput}
              onChange={(val) => setUsernameInput(val)}
              width="100%"
              type="background"
            />
          )}
          <LandInput
            prefix="账号: "
            inputType="tel"
            value={accountInput}
            onChange={(val) => setAccountInput(val)}
            width="100%"
            type="background"
          />
          <LandInput
            prefix="密码: "
            inputType="password"
            value={passwordInput}
            onChange={(val) => setPasswordInput(val)}
            width="100%"
            type="background"
          />
        </LandFlex>
      </LandDialog>
    </>
  );
};
const StyledFloatingBtn = styled.div`
  width: fit-content;
  height: fit-content;
  opacity: 0;
  transition: all 200ms ease-in-out;
  .floating-content {
    transform: translate(100%, 100%);
    opacity: 0;
    transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  }
  &:hover {
    opacity: 1;
    .floating-content {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

export default FloatingProfileBtn;

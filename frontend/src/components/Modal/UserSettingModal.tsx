import { useRef, useState, Dispatch, SetStateAction } from "react";
import { userType } from "../../type/userTypes";
import style from "./UserSettingModal.module.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/modules/user";
import { useRouter } from "next/router";
import { store } from "../../../store/store";

interface propsType {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  user_info: userType;
}

const UserSettingModal: React.FunctionComponent<propsType> = ({
  setVisible,
  visible,
  user_info,
}) => {
  const userInfoRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const accessToken = store.getState().user.accessToken;
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("");
  //회원탈퇴가 들어갈 axios 입니다. (회원탈퇴하고 메인페이지로 보내주어야하고 ATK 초기화.)
  const deleteAccount = () => {
    axios
      .delete("https://j8b208.p.ssafy.io/api/oauth/kakao/delete", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then(function (withdrawal) {
        //제대로 동작하면
        console.log(withdrawal);
        dispatch(logout()); //토큰 없애고
        router.push("/"); //랜딩페이지로 이동.
      })
      .catch((err) => {
        console.log(accessToken);

        console.log(err);
      });
  };

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setAge(target.value);
  };

  const changeGender = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setGender(target.value);
  };

  const putAccount = () => {
    console.log("Gender : ", gender);
    console.log("Age : ", age);

    axios
      .put(
        "https://j8b208.p.ssafy.io/api/oauth/users",
        {
          user_gender: gender,
          user_age_range: age,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then(function (put) {
        //제대로 동작하면
        console.log(put);
        router.push("/mypage"); //랜딩페이지로 이동.
      })
      .catch((err) => {
        console.log(accessToken);
        console.log(err);
      });
  };

  return (
    <div className={style.userSettingModal}>
      <div className={style.userSettingModal_header}>
        <img
          className={style.userSettingModal_header_left}
          src="/assets/image/logo.png"
        ></img>
        <div> &nbsp; </div>
        <img
          className={style.userSettingModal_header_right}
          src="/assets/icons/topbar_img.png"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
      <h2>개인 정보 수정</h2>
      <div className={style.userSettingModal_content}>
        <div className={style.userSettingModal_leftImg}>
          <img src={user_info.user_profile}></img>
        </div>
        <div className={style.userSettingModal_rightDesc}>
          <div>
            <p>이름 {user_info.user_name}</p>
          </div>
          <div>
            <p>이메일 {user_info.user_email}</p>
          </div>
          <div className={style.userSettingModal_rightDesc_age}>
            <label>연령대 </label>
            <input
              defaultValue={user_info.user_age_range}
              onChange={changeAge}
              ref={userInfoRef}
            />
            대
          </div>
          <div>
            <label>성별 </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onClick={changeGender}
            />
            남
            <input
              type="radio"
              name="gender"
              value="female"
              onClick={changeGender}
            />
            여
          </div>
        </div>
      </div>
      <div className={style.userSettingModal_button}>
        <button
          className={style.userSettingModal_button_exit}
          onClick={deleteAccount}
        >
          회원 탈퇴
        </button>
        <button
          className={style.userSettingModal_button_update}
          onClick={putAccount}
        >
          개인정보 수정
        </button>
      </div>
    </div>
  );
};

export default UserSettingModal;

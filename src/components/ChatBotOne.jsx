import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[-1.5, 0.48, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};
const CubeTwo = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta / 2;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[1.5, 0.98, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};

const ChatBotOne = ({ isAuth }) => {
  let navigate = useNavigate();

  const onClickFunction = () => {
    navigate("/gtown-info");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // });
  return (
    <div className="chatBot-outter">
      <div className="head-gtown">
        <div className="img-head-gtown">
          <img src={process.env.PUBLIC_URL + "/img/five.png"} alt="five" />
        </div>
        <div className="info-head-gtown">
          <h1>Community</h1>
          <span className="secondFont-head">bulletin.</span>
          <motion.button
            className="gtown-mint"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            onClick={onClickFunction}
          >
            Join
          </motion.button>
          <div className="realpoint-branding-outter">
            <Link
              className="social-btns"
              to="https://www.instagram.com/gtown_journal"
              target="blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              <InstagramIcon className="gtown-btn" />
            </Link>
          </div>
        </div>
      </div>
      <div className="banner-realpoint">
        <Canvas camera={{ fov: 10, position: [12, 20, 20] }}>
          <gridHelper args={[100, 100, "#00000067"]} />
          <directionalLight position={[0, 0, 4]} />
          <ambientLight />

          <Cube />
          <CubeTwo />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="left-discover">
        <div className="div-left"></div>
        <div>
          <img
            className="oneImage-discover"
            src={process.env.PUBLIC_URL + "/img/one.png"}
            alt="Img"
          />
        </div>
      </div>
      <div className="right-discover">
        <div>
          <img
            className="twoImage-discover"
            src={process.env.PUBLIC_URL + "/img/two.png"}
            alt="Img"
          />
        </div>
        <div className="div-right"></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;

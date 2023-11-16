// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import TheHistoriaDemo from "../TheHistoriaDemo.otf";
import { Text } from "@react-three/drei";

const Cube = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta;
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  });
  return (
    <>
      <mesh position={[1, 0, 0]} ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};
const CubeTwo = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta / 2;
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  });
  return (
    <>
      <mesh position={[1, 0, 0]} ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};

const ChatBotOne = ({ isAuth }) => {
  // let navigate = useNavigate();

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
          <h1>Gtown</h1>
          <span className="secondFont-head">journal.</span>
          <motion.button
            className="gtown-mint"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            mint
          </motion.button>
          <div className="realpoint-branding-outter">
            <Link
              className="social-btns"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              to={"/gtown-info"}
            >
              <InfoIcon />
            </Link>

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
        <Canvas>
          <directionalLight position={[0, 0, 4]} />
          <ambientLight />
          <Text
            scale={[1, 1, 1]}
            color="#000017" // default
            anchorX="center" // default
            anchorY={-2} // default
            font={TheHistoriaDemo}
          >
            ------X------
          </Text>
          <Cube />
          <CubeTwo />
          <Text
            scale={[1, 1, 1]}
            color="#000017" // default
            anchorX="center" // default
            anchorY={0.5} // default
            font={TheHistoriaDemo}
          >
            ------X------
          </Text>
          <Text
            scale={[1, 1, 1]}
            color="#000017" // default
            anchorX="center" // default
            anchorY={1.5} // default
            font={TheHistoriaDemo}
          >
            coming soon...
          </Text>
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

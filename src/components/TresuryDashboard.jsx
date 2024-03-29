import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import SendIcon from "@mui/icons-material/Send";

function CarModalOne() {
  const gltf = useLoader(GLTFLoader, "/model/Audi-R8.gltf");
  return <primitive object={gltf.scene} />;
}

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="treasury-outter">
      <div className="treasury-dashboard-head">
        <motion.div
          className="bidBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <TouchAppIcon fontSize="large" sx={{ width: "90%" }} />
          <h2>Bid</h2>
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <SkipPreviousIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <SkipNextIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
      </div>
      <div className="digitalArt-outter">
        <div>
          <Canvas camera={{ fov: 20, position: [7, 10, -20] }}>
            <gridHelper args={[50, 50, "0x000000"]} />
            <directionalLight position={[0, 0, 4]} />
            <directionalLight position={[0, 4.5, -5.2]} />
            <CarModalOne />
            <OrbitControls />
          </Canvas>
        </div>
        <div className="digitalArt-info">
          <h1>Audi R8</h1>
          <p>
            Nostrud ipsum mollit voluptate ullamco amet esse commodo consequat
            labore nisi sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreasuryDashboard;

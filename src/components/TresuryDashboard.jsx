import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        ></motion.div>
      </div>
      <div className="digitalArt-outter">
        <div>
          <Canvas camera={{ fov: 20, position: [7, 10, -20] }}>
            <gridHelper args={[100, 100, "0x000000"]} />
            <directionalLight position={[0, 0, 4]} />
            <directionalLight position={[0, 4.5, -5.2]} />
            <CarModalOne />
            <OrbitControls />
          </Canvas>
        </div>
        <div className="digitalArt-info"></div>
      </div>
    </div>
  );
};

export default TreasuryDashboard;

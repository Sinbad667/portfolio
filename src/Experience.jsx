import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { useState, useEffect } from "react";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const [showPopup, setShowPopup] = useState(false);

  // Détecter si on est sur mobile et rediriger
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;

    if (isMobile) {
      window.location.href = "https://portfolio2-cyan-gamma.vercel.app/";
      return;
    }
  }, []);

  // Afficher la notification automatiquement après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 secondes

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  // Effet pour ajouter/supprimer la notification discrète du DOM
  useEffect(() => {
    if (showPopup) {
      // Attendre que la police soit chargée
      const loadFont = async () => {
        try {
          await document.fonts.load("16px MOELA");
        } catch (error) {
          console.log(
            "Police MOELA non disponible, utilisation de la police de fallback"
          );
        }

        // Créer la notification
        const notifDiv = document.createElement("div");
        notifDiv.id = "portfolio-notification";
        notifDiv.innerHTML = `
                    <div style="
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        background: #1a1a1a;
                        border: 2px solid #404040;
                        border-radius: 12px;
                        padding: 20px;
                        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4);
                        z-index: 1000;
                        font-family: 'MOELA', 'Arial', system-ui, sans-serif !important;
                        transition: all 0.3s ease;
                        transform: translateY(0);
                    " id="notification-card">
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button style="
                                background: #404040;
                                color: #ffffff;
                                border: none;
                                border-radius: 8px;
                                padding: 14px 24px;
                                font-size: 15px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s ease;
                                font-family: 'MOELA', 'Arial', system-ui, sans-serif !important;
                                letter-spacing: 0.5px;
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            " id="view-portfolio">Voir de plus près ?</button>
                        </div>
                    </div>
                `;

        document.body.appendChild(notifDiv);
        const card = document.getElementById("notification-card");
        const button = document.getElementById("view-portfolio");

        // Effet hover sur la carte
        card.onmouseenter = () => {
          card.style.transform = "translateY(-3px)";
          card.style.boxShadow =
            "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)";
        };

        card.onmouseleave = () => {
          card.style.transform = "translateY(0)";
          card.style.boxShadow =
            "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)";
        };

        // Effet hover sur le bouton
        button.onmouseenter = () => {
          button.style.backgroundColor = "#555555";
          button.style.transform = "translateY(-2px)";
          button.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
        };

        button.onmouseleave = () => {
          button.style.backgroundColor = "#404040";
          button.style.transform = "translateY(0)";
          button.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        };

        // Clic pour ouvrir le portfolio
        button.onclick = () => {
          window.location.href = "https://portfolio2-cyan-gamma.vercel.app/";
        };
      };

      loadFont();
    }
  }, [showPopup]);

  return (
    <>
      <Environment preset="city" />

      <color args={["#2B2B2B"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={25}
            color={"#000000"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://portfolio2-cyan-gamma.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./font/MOELA.ttf"
            fontSize={0.5}
            position={[3, 0.65, 0]}
            rotation-y={-1.25}
            children={"Bilal \nHamzaoui"}
            textAlign="center"
            color="#ffffff"
          ></Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

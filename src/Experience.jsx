import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

        <Environment preset='city'/>

        <color args={ ['#2B2B2B'] } attach="background" />

        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ -0.4, 0.2 ] }
            azimuth={ [ -1, 0.75] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 }>
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 25 }
                    color={ '#000000'}
                    rotation={ [0.1, Math.PI, 0] }
                    position={ [0, 0.55, - 1.15] }
                />
                <primitive 
                    object={ computer.scene }
                    position-y={ - 1.2 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, -1.4 ]}
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://marhicmaxim.wixsite.com/artifacts-portfolio"/>
                    </Html>  
                </primitive>
                <Text
                    font='./Doto-VariableFont_ROND,wght.ttf'
                    fontSize={ 0.5 }
                    position={ [3, 0.65, 0] }
                    rotation-y={ - 1.25}
                    children={'Artifacts \n ESN'}
                    textAlign='center'
                ></Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}
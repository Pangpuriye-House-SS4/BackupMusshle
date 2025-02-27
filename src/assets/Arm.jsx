/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\arm.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Arm(props) {
  const { nodes, materials } = useGLTF('/arm.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube010.geometry} material={materials.None} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube034_Cube018.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube019.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube020.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube021.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube022.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube023.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube024.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube025.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube026.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube027.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube028.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube029.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube030.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube031.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube032.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube033.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube034.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
      <mesh geometry={nodes.Cube034_Cube035.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={-1} />
    </group>
  )
}

useGLTF.preload('/arm.gltf')

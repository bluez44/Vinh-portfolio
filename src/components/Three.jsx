import React, { useEffect } from 'react'

import * as THREE from 'three'

import SceneInit from '../lib/ScreenInit'
function Three() {
  useEffect(() => {
    const test = new SceneInit('three')
    test.initialize()
    test.animate()

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);

  }, [])

  return (
    <div id='canvas_container' className='flex justify-center absolute left-1/2 top-1/3 lg:top-1/2 transform -translate-1/2'>
        <canvas id='three' className=''></canvas>
    </div>
  )
}

export default Three
function rotateAroundWorldAxis( object, axis, radians ) {
    object.updateMatrix();
    var rotationMatrix = new THREE.Matrix4();

    rotationMatrix.makeRotationAxis( axis.normalize(), radians );
    rotationMatrix.multiply( object.matrix );                       // pre-multiply
    object.matrix = rotationMatrix;
    //object.rotation.setEulerFromRotationMatrix( object.matrix );
    
    
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix.multiply(object.matrix);        // pre-multiply
    object.matrix = rotWorldMatrix;
    object.rotation.getRotationFromMatrix(object.matrix, object.scale);
}

function rotateAroundObjectAxis(object, axis, radians) {
    var rotObjectMatrix = new THREE.Matrix4();
    rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
    object.matrix.multiply(rotObjectMatrix);      // post-multiply
    object.rotation.setEulerFromRotationMatrix(object.matrix);
}

/*THREE.Object3D._matrixAux = new THREE.Matrix4(); // global auxiliar variable
// Warnings: 1) axis is assumed to be normalized. 
//  2) matrix must be updated. If not, call object.updateMatrix() first  
//  3) this assumes we are not using quaternions
THREE.Object3D.prototype.rotateAroundWorldAxis = function(axis, radians) { 
    THREE.Object3D._matrixAux.makeRotationAxis(axis, radians);
    this.matrix.multiplyMatrices(THREE.Object3D._matrixAux,this.matrix); // r56
    THREE.Object3D._matrixAux.extractRotation(this.matrix);
    this.rotation.setEulerFromRotationMatrix(THREE.Object3D._matrixAux, this.eulerOrder ); 
    this.position.getPositionFromMatrix( this.matrix );
}
THREE.Object3D.prototype.rotateAroundWorldAxisX = function(radians) { 
    this._vector.set(1,0,0);
    this.rotateAroundWorldAxis(this._vector,radians);
}
THREE.Object3D.prototype.rotateAroundWorldAxisY = function(radians) { 
    this._vector.set(0,1,0);
    this.rotateAroundWorldAxis(this._vector,radians);
}
THREE.Object3D.prototype. rotateAroundWorldAxisZ = function(degrees){ 
    this._vector.set(0,0,1);
    this.rotateAroundWorldAxis(this._vector,degrees);
}*/
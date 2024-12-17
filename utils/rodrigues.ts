export default function rodriguesRotationVectorFromMatrix(rotationMatrix: number[]) {
    const trace = rotationMatrix[0] + rotationMatrix[4] + rotationMatrix[8];
    
    let angle = Math.acos((trace - 1) / 2);

    let axis = [
        rotationMatrix[5] - rotationMatrix[7],
        rotationMatrix[6] - rotationMatrix[2],
        rotationMatrix[1] - rotationMatrix[3]
    ];
    const denominator = 2 * Math.sin(angle);
    axis = axis.map(component => component / denominator);

    const rotationVector = axis.map(component => component * angle * 180 / Math.PI);

    return rotationVector;
}

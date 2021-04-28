// Case one
const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2;
const result1 = triangleOne > triangleTwo;
if (result1) {
  console.log(
    `Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2. The triangle with the biggest area is Triangle One.`
  );
} else {
  console.log(
    `Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2. The triangle with the biggest area is Triangle Two.`
  );
}

// Case Two
const triangleThree = (16.5 * 20.3) / 2;
const triangleFour = (20.3 * 16.5) / 2;
const result2 = triangleThree == triangleFour;
if (result2) {
  console.log(
    `Triangle Three has an area of ${triangleThree} cm2 and Triangle Four has an area of ${triangleFour} cm2. The area of both Triangles is equal.`
  );
}

// Case Three
const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) / 2;
const result3 = triangleFive > triangleSix;
if (result3) {
  console.log(
    `Triangle Five has an area of ${triangleFive} cm2 and Triangle Six has an area of ${triangleSix} cm2. The triangle with the biggest area is Triangle Five.`
  );
} else {
  console.log(
    `Triangle Five has an area of ${triangleFive} cm2 and Triangle Six has an area of ${triangleSix} cm2. The triangle with the biggest area is Triangle Six.`
  );
}

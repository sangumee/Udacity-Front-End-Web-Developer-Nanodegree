const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

// const gemstone = {
//     type: 'quartz',
//     color: 'rose',
//     carat: 21.29
//   };

//   const type = gemstone.type;
//   const color = gemstone.color;
//   const carat = gemstone.carat;

//   console.log(type, color, carat);

// Use Destructuring
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};

const {
    type,
    color,
    carat
} = gemstone;

console.log(type, color, carat);

// What do you expect to be returned from calling getArea()?
const circle = {
    radius: 10,
    color: 'orange',
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function () {
        return 2 * Math.PI * this.radius;
    }
};

let {
    radius,
    getArea,
    getCircumference
} = circle;
// global variable initializations  
let weight;
let c;
const array_aus = [3220,3560,3810,4205,4460,4741,5933,6080,6269,6712,7288,7292,8113,8380,8920,9300,10153,10570,10804,11028,11479,12024,12391,13460,13751,14075,14317,15145,15832,16570,17729];
const array_pr_aus = [38.24,39.71,41.74,45.75,52.87,55.45,66.65,66.65,67.56,74.78,77.14,80.8,82.34,87.38,89.34,92.34,95.23,99.38,105.83,107.76,108.36,110.99,110.31,117.48,128.74,122.01,125.22,133.95,143.35,152.61,162.51];

const array_canada = [3285,3681,4189,4293,5019,5285,5837,6324,6692,7384,7614,7947,8233,8737,9026,9682,10221,10668,11266,11995,12437,12678,13409,13601,13996,14289,14698,15450,15697,16320];
const array_pr_canada = [41.52,44.61,48.57,49.38,55.04,57.12,61.42,65.22,68.09,73.49,75.29,77.88,80.11,84.04,86.30,91.42,95.62,99.11,103.77,109.46,112.90,114.78,120.49,121.98,125.06,127.35,130.54,136.41,138.33,143.19];

const array_france = [3089,3955,4368,4613,4827,5242,6010,6703,7156,7313,7564,7971,8442,9135,9315,9580,9891,10192,10570,10953,11281,11403,11778,12288,12726,12869,13149,13725,14052,14438];
const array_pr_france = [37.65,43.45,50.16,52.22,53.53,56.27,62.65,67.37,73.87,75.67,89.84,80.1,84.47,85.34,87.7,88.02,89.66,93.08,95.23,89.94,102.36,104.03,107.34,109.82,112.92,113.1,115.54,119.6,121.37,122.64];

const array_japan = [3074,3505,3824,4300,4820,5227,5415,6058,6487,7010,7323,8093,8780,9597,10075,10320,11108,11331,11860,12659,12929,13320,13927,14402,14870,15005,15197,15751,16305,16434];
const array_pr_japan = [37.65,39.71,43.05,47.72,57.35,60.17,61.11,66.65,66.65,71.19,75.67,82.55,84.47,88.2,92.23,93.51,99.94,103.19,108.66,109.52,113.83,117.17,129.57,135.22,139.88,130.79,133.95,134.74,142.48,145.01];

const array_usa = [3046,3389,3773,4112,4636,5100,5447,5802,6259,6759,7150,7670,8729,9624,9720,10225,10870,11498,12020,13464,14305,15475,16227,17307,18555,18860,19068,19497,20073,20165];
const array_pr_usa = [35.74,37.65,43.42,44.75,45.85,47.72,52.35,55.4,58.2,61.65,71.19,78.33,84.47,95.51,88.8,93.08,107.34,117.98,117.98,122.74,132.48,135.12,147.14,157.95,160.99,156.55,166.35,170.78,179.84,173.02];

let x0, x1, x2, x3, x4;
let y0,y1,y2,y3,y4;
const target=1
let ans;

let size = 5



//get data from input
document.getElementById("calcu").onclick = function(){
    weight = document.getElementById("w").value;
    console.log(weight);
    weight = Number(weight);

    
    

    c = document.getElementById("county").value;
    console.log(c);
   
    let ref_price = 0.0077*weight+19.245;
    if(c == "" && weight ==""){
        window.alert("Please ENTER a WEIGHT and choose a designated COUNTRY")
    }else if(weight > 20000 && c!=""){
        window.alert("Please ENTER a WEIGHT that is NOT MORE than 20,000 grams")

    }else if(weight <= 3000 || weight < 0  && c!=""){
        window.alert("Please ENTER a VALID input and a WEIGHT that is NOT BELOW 3,000 grams")
    } else if(c == "" && weight !=""){
        window.alert("Please ENTER a designated COUNTRY");
    }else if(c !="" && weight ==""){
        window.alert("Please ENTER a WEIGHT");
    }else if(c == "Australia" && weight != ""){
        //find closest weight based from the weight the user has input
        const findClosest = (array_aus = []) => {
             size = 5;
            return [x0,x1,x2,x3,x4]=array_aus.sort((a, b) => {
               const distanceA = Math.abs(a - weight)
               const distanceB = Math.abs(b - weight)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest(array_aus, weight));
         console.log(x0);
       
         //find closest price based from the reference price formula
         const findClosest_pr = (array_pr_aus = []) => {
             size = 5;
            return [y0,y1,y2,y3,y4]=array_pr_aus.sort((a, b) => {
               const distanceA = Math.abs(a -  ref_price)
               const distanceB = Math.abs(b -  ref_price)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest_pr(array_pr_aus,  ref_price));

         run();
         document.getElementById("answer").innerHTML ="$ "+ ans.toFixed(2);
        get_DataPoints(x0,x1,x2,x3,x4,y0,y1,y2,y3,y4);
        }else if(c == "Canada" && weight != ""){
         //find closest weight based from the weight the user has input
         const findClosest = (array_canada = []) => {
            size = 5;
            return [x0,x1,x2,x3,x4]=array_canada.sort((a, b) => {
               const distanceA = Math.abs(a - weight)
               const distanceB = Math.abs(b - weight)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest(array_canada, weight));
         console.log(x0);

         //find closest price based from the reference price formula
         const findClosest_pr = (array_pr_canada = []) => {
             size = 5;
            return [y0,y1,y2,y3,y4]=array_pr_canada.sort((a, b) => {
               const distanceA = Math.abs(a -  ref_price)
               const distanceB = Math.abs(b -  ref_price)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest_pr(array_pr_canada,  ref_price));

         run();
         document.getElementById("answer").innerHTML ="$ "+ ans.toFixed(2);
        get_DataPoints(x0,x1,x2,x3,x4,y0,y1,y2,y3,y4);
        
        }else if(c == "France" && weight != ""){
             //find closest weight based from the weight the user has input
         const findClosest = (array_france = []) => {
            size = 5;
            return [x0,x1,x2,x3,x4]=array_france.sort((a, b) => {
               const distanceA = Math.abs(a - weight)
               const distanceB = Math.abs(b - weight)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest(array_france, weight));
         console.log(x0);

         //find closest price based from the reference price formula
         const findClosest_pr = (array_pr_france = []) => {
             size = 5;
            return [y0,y1,y2,y3,y4]=array_pr_france.sort((a, b) => {
               const distanceA = Math.abs(a -  ref_price)
               const distanceB = Math.abs(b -  ref_price)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest_pr(array_pr_france,  ref_price));

         run();
         document.getElementById("answer").innerHTML ="$ "+ ans.toFixed(2);
        get_DataPoints(x0,x1,x2,x3,x4,y0,y1,y2,y3,y4);
        }else if(c == "Japan" && weight != ""){
             //find closest weight based from the weight the user has input
         const findClosest = (array_japan = []) => {
             size = 5;
            return [x0,x1,x2,x3,x4]=array_japan.sort((a, b) => {
               const distanceA = Math.abs(a - weight)
               const distanceB = Math.abs(b - weight)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest(array_japan, weight));
         console.log(x0);

         //find closest price based from the reference price formula
         const findClosest_pr = (array_pr_japan = []) => {
            size = 5;
            return [y0,y1,y2,y3,y4]=array_pr_japan.sort((a, b) => {
               const distanceA = Math.abs(a -  ref_price)
               const distanceB = Math.abs(b -  ref_price)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest_pr(array_pr_japan,  ref_price));

         run();
         document.getElementById("answer").innerHTML ="$ "+ ans.toFixed(2);
        get_DataPoints(x0,x1,x2,x3,x4,y0,y1,y2,y3,y4);
        }else if(c == "USA" && weight != ""){
             //find closest weight based from the weight the user has input
         const findClosest = (array_usa = []) => {
             size = 5;
            return [x0,x1,x2,x3,x4]=array_usa.sort((a, b) => {
               const distanceA = Math.abs(a - weight)
               const distanceB = Math.abs(b - weight)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest(array_usa, weight));
         console.log(x0);

         //find closest price based from the reference price formula
         const findClosest_pr = (array_pr_usa = []) => {
             size = 5;
            return [y0,y1,y2,y3,y4]=array_pr_usa.sort((a, b) => {
               const distanceA = Math.abs(a -  ref_price)
               const distanceB = Math.abs(b -  ref_price)
               if (distanceA === distanceB) {
                  return a - b
               }
               return distanceA - distanceB
            }).slice(0, size).sort((a, b) => a - b);
         };
         console.log(findClosest_pr(array_pr_usa,  ref_price));

         run();
         document.getElementById("answer").innerHTML ="$ "+ ans.toFixed(2);
        get_DataPoints(x0,x1,x2,x3,x4,y0,y1,y2,y3,y4);
        }


}

//display data points
function get_DataPoints(x0, x1, x2, x3, x4,y0,y1,y2,y3,y4 ){
    document.getElementById("val_x0").innerHTML = "X0 = "+ x0; 
    document.getElementById("val_x1").innerHTML = "X1 = "+ x1; 
    document.getElementById("val_x2").innerHTML = "X2 = "+ x2; 
    document.getElementById("val_x3").innerHTML = "X3 = "+ x3; 
    document.getElementById("val_x4").innerHTML = "X4 = "+ x4; 
    document.getElementById("val_y0").innerHTML = "Y0 = "+ y0; 
    document.getElementById("val_y1").innerHTML = "Y1 = "+ y1; 
    document.getElementById("val_y2").innerHTML = "Y2 = "+ y2; 
    document.getElementById("val_y3").innerHTML = "Y3 = "+ y3; 
    document.getElementById("val_y4").innerHTML = "Y4 = "+ y4; 
}

//lagrange operations below
async function run(){
    const x = [x0,x1,x2,x3,x4];
    const y = [y0,y1,y2,y3,y4];
    console.log(lagrange(weight, x, y));
    ans = lagrange(weight, x, y)
    return ans;
    
    
}


    function lagrange (target, x, y){
        let result = 0;
        for (let i =0; i<y.length;i++){
            const t = coeff(target, x, i, x[i]);
            result += t * y[i];
        }
        return result;
    }

    function coeff(target, arr, currentIndex, currentValue){
        let prod = 1;
        for (let i = 0; i<arr.length ; i++){
            if(i!== currentIndex){
                prod *= (target-arr[i])/(currentValue - arr[i]);
            
        }
        
    }
    return prod;
    }


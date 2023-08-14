let count_div=16;
let count_sqrt=Math.pow(count_div,1/2);
// console.log()
let isHover=0;
let hoverArr=[];



// let countTransitioned=0;
const container_div=document.querySelector('div.container');

const btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    let promptInt=prompt('Please enter number of squares per side','Default at 4');
    if (promptInt<=100){
        count_sqrt=promptInt;
        // container_div.childNodes.remove();
        while(container_div.lastElementChild)
            container_div.removeChild(container_div.lastElementChild);
        createGrids();
    }
    else
        alert('Please enter a number less than 100; else there might be delays!!');  
}
);

container_div.addEventListener('mouseleave',(e)=>{
    document.querySelectorAll('div.grid_divs').forEach((ele)=>{
        // ele.classList.remove('hoverPixel');
        // console.log(getInitiGridColor);
        ele.style.backgroundColor=`${getInitiGridColor}`;
        // countTransitioned=0;
        isHover=0;
        hoverArr=[];
    })
})
let rndR=0, rndG=0, rndB=0, transF=0.1;
let addHoverEffect=(ele)=>{
    ele.addEventListener('mouseover',(e)=>{
        let idVal=e.target.getAttribute('id');
        if (isHover==0){
            rndR=Math.random()*255;
            rndG=Math.random()*255;
            rndB=Math.random()*255;
            transF=0.1
        }
        if(hoverArr.includes(idVal)){
            let finCount=hoverArr.reduce((count,item)=>{
                return count + +(item==idVal);  
            },  
            0);
            transF=Math.min(++finCount,10)/10;
        }
        else
            transF=0.1;
            
        let randomRGB=`rgba(${rndR},${rndG},${rndB},${transF})`
        e.target.style.backgroundColor=`${randomRGB}`;
        hoverArr.push(e.target.getAttribute('id'));
        isHover=1;
    })
}

let createGrids=()=>{
    // console.log(count_sqrt)
    let countGrid=1;
    for(let i=1;i<=count_sqrt;i++){

        let rw_container=document.createElement('div');
        rw_container.setAttribute('class','row_containers');
        let calcHeight=100/count_sqrt;
        rw_container.style.height=`${calcHeight}%`;
    
        for (let j=1;j<=count_sqrt;j++){
            let grid_div=document.createElement('div');
            grid_div.setAttribute('class','grid_divs');
            grid_div.setAttribute('id',`grid_divs${countGrid++}`);
            let calcWidth=100/count_sqrt;
            grid_div.style.width=`${calcWidth}%`;
            // console.log('New width set '+calcWidth);
            rw_container.appendChild(grid_div);
            addHoverEffect(grid_div);
        }
    
        container_div.appendChild(rw_container);
        
    }

}
createGrids();
let getInitiGridColor=document.querySelector('div.grid_divs:last-child').style.backgroundColor;
// console.log(getInitiGridColor);


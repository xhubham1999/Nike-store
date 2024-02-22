const wapper = document.querySelector(".sliderwap");
const menu = document.querySelectorAll(".items");
const product= [
	{
		id : 1,
		title: "AIR FORCE",
		price: "$3000",
		color: [{
          code:"white",
			Img:"img/air_force.png",
		},{
			code:"black",
			Img:"img/air_force-black.png"
		}]
	},
	{
		id : 2,
		title: "JORDAN",
		price: "$3000",
		color: [{
			code:"lightgreen",
			Img:"img/jorden.png",
		},{
			code:"pink",
			Img:"img/jorden-pink.png"
		}]
	},
	{
		id : 3,
		title: "LOBSTER",
		price: "$3000",
		color: [{
			code:"gray",
			Img:"img/lobster.png",
		},{
			code:"green",
			Img:"img/lobster_green.png"
		}]
	},
	{
		id : 4,
		title: "NIKE MAG",
		price: "$3000",
		color: [{
			code:"gray",
			Img:"img/mag.png",
		},{
			code:"brown",
			Img:"img/magbrown.png"
		}]
	},
	{
		id : 5,
		title: "AIR JORDAN",
		price: "$3000",
		color: [{
			code:"white",
			Img:"img/luxe.png",
		},{
			code:"black",
			Img:"img/luxeblack.png"
		}]
	}];
	let pro= product[0];
	const productimg = document.querySelector('.proimg');
	const protitle = document.querySelector('.protitle');
	const proprice = document.querySelector('.proprice');
	const colors = document.querySelectorAll('.color');
	const size = document.querySelectorAll('.size');
menu.forEach((item,index)=>{
	item.addEventListener("click",() => {

		wapper.style.transform =`translateX(${-100 * index}vw)`;
		pro = product[index];
		productimg.src = pro.color[0].Img;
		protitle.innerHTML = pro.title ;
		proprice.innerHTML = `Price ${pro.price}`;
		colors.forEach((color,index) => {
			color.src= pro.color[index].Img;
		});
		})
	});
	// color change
	colors.forEach(color=>{
		color.addEventListener("click",()=>{
			productimg.src = color.src;
			})
			});
			// size change
		
			
				
		
				
				


		

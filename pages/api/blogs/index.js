const blogData=[
    {
        title:"I work best when my space is filled with inspiration",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan",
        tags:["Creative","communication"],
        author:["halil toma","caitlin tencate"]
    },
    {
        title:"Havuclu Pirasa",
        author:"caitlin tencate"
    },
    {
        title:"naneli Pirasa",
        author:"caito toma"
    },
    {
        title:"Havuclu Pirasa",
        author:"halil toma"
    },
    {
        title:"Havuclu Pirasa",
        author:"halil toma",
    },
    {
        title:"Havuclu Pirasa",
        author:"halil toma",
    },
    
]



export default function handler(req, res) {
   res.status(200).send(blogData)
  }
  
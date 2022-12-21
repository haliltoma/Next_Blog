const blogData=[
    {
        title:"Havuclu Pirasa",
        author:"halil toma"
    },
    {
        title:"naneli Pirasa",
        author:"halil toma"
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
  
import React,{useState,useEffect} from "react";
import TeamsComp from "./TeamsComp";
import "./styles/teams.css";


function Teams(){
    const[ arr,setArr]=useState([0,0,0,0,0,0,0,0]);
   

  const data=
    [
        {
            "Gladiator": "Prakar Sharma",
            "SnowLeopards": "Bharath Kumar",
            "Tridents": "Imdadulla Khan",
            "FireBirds": "Aditi Mahajan",
            "SilverFalcons": "Ansh Gangwar",
            "BlackArchers": "Basant Solanky",
            "WarLords": "Ashmesh dawande",
            "DessertHawks": "Sanat Tudu"
        },
        {
            "Gladiator": "Tanishq Mohan Mehta",
            "SnowLeopards": "Utkarsh Patel",
            "Tridents": "Vijay Rakshit",
            "FireBirds": "Patil Tanmay Vijay",
            "SilverFalcons": "Siddharth Gupta",
            "BlackArchers": "Atharv Shendage",
            "WarLords": "Sudev Kumar Padhi",
            "DessertHawks": "Shreyas Sachin Pande"
        },
        {
            "Gladiator": "Dnyanraj Pawar",
            "SnowLeopards": "Thomas M Josline",
            "Tridents": "Akshay Vijay Wairagade",
            "FireBirds": "Unique Heera",
            "SilverFalcons": "Mayank Chaturvedi",
            "BlackArchers": "Rajagopalan R",
            "WarLords": "Nishant Mahawar",
            "DessertHawks": "Ayush Kumar Das"
        },
        {
            "Gladiator": "Sushant Yerawar",
            "SnowLeopards": "Shaleen Malik",
            "Tridents": "Shweta Chauhan",
            "FireBirds": "shivam shrivastava",
            "SilverFalcons": "Sarvesh Kumar",
            "BlackArchers": "Nomaan Alam Kherani",
            "WarLords": "Spandan Das",
            "DessertHawks": "Arshpreet Singh"
        },
        {
            "Gladiator": "Amar Budhiraja",
            "SnowLeopards": "Sanskar Pathak",
            "Tridents": "Sathwik Sakilam",
            "FireBirds": "Bomminayuni Siva Praneeth",
            "SilverFalcons": "Ayush Kumar Gupta",
            "BlackArchers": "Yuvraj Singh Shori",
            "WarLords": "Ansh azad",
            "DessertHawks": "DHANA RAM"
        },
        {
            "Gladiator": "Kahar Vaishnavi Hemant",
            "SnowLeopards": "Ramavath adarsh",
            "Tridents": "Ankadala Hemanth",
            "FireBirds": "Surender kumar",
            "SilverFalcons": "Mali Rajesh",
            "BlackArchers": "Kasaragadda Hemanth",
            "WarLords": "Niket Srivastav",
            "DessertHawks": "Sanyam Sharma"
        },
        {
            "Gladiator": "Abhay Singh Patel",
            "SnowLeopards": "Mudhavath Ramesh Naik",
            "Tridents": "Ajeet Kumar",
            "FireBirds": "Rakesh Gonela",
            "SilverFalcons": "B Vamshi Krishna",
            "BlackArchers": "DURUSETI SAI SRIHAN",
            "WarLords": "Yash Mandawat",
            "DessertHawks": "Rajvardhan"
        },
        {
            "Gladiator": "Anshu Kumar",
            "SnowLeopards": "Elavartha Nikhil Reddy",
            "Tridents": "Vedhamsh Bode",
            "FireBirds": "CHELLA SUDEEP",
            "SilverFalcons": "Deepak",
            "BlackArchers": "Ganesh",
            "WarLords": "Nadipalli Pranay Krishna",
            "DessertHawks": "Cho Win Aung"
        },
        {
            "Gladiator": "Akash Deep",
            "SnowLeopards": "Pravar",
            "Tridents": "Amit Kumar",
            "FireBirds": "DHANANJAY",
            "SilverFalcons": "Alapati Nagasai",
            "BlackArchers": "Nalamati Sravan deep",
            "WarLords": "Harshil Bhargava",
            "DessertHawks": "Bheemavarapu Chidvilas Naidu"
        },
        {
            "Gladiator": "Anand Prakash",
            "SnowLeopards": "Utkarsh kumar",
            "Tridents": "Vedansh kapoor",
            "FireBirds": "Yalla Venkat Yashwanth",
            "SilverFalcons": "Amarjeet Kumar",
            "BlackArchers": "Tyarla Shirisha",
            "WarLords": "G Sai Prabhath",
            "DessertHawks": "B Sai Ashrith Vardhan"
        },
        {
            "Gladiator": "Rahul",
            "SnowLeopards": "Siddharth Jain",
            "Tridents": "Shubham Yogesh Mahajan",
            "FireBirds": "Gaurav",
            "SilverFalcons": "Prajjwal Kohli",
            "BlackArchers": "Daksh",
            "WarLords": "Bishal Kumar Sahani",
            "DessertHawks": "Bubli Brahma"
        },
        {
            "Gladiator": "Asif Rahaman",
            "SnowLeopards": "ADITYA PRAKASH",
            "Tridents": "ROHITHKUMAR KUPPILI",
            "FireBirds": "Pasupula Ranga Raga Chandana",
            "SilverFalcons": "Rishabh Sahu",
            "BlackArchers": "Vikas",
            "WarLords": "Yatika Kain",
            "DessertHawks": "Ramdeni Divya Teja"
        },
        {
            "Gladiator": "Madhav Sharma",
            "SnowLeopards": "Kethavath Jagadish",
            "Tridents": "Rishika Malve",
            "FireBirds": "NIDHISH THAWAREY",
            "SilverFalcons": "Bhavya Jain",
            "BlackArchers": "Sanidhya Bharti",
            "WarLords": "Priyanshu Kishore",
            "DessertHawks": "ROHIT RAJKUMAR DHAMALE"
        },
        {
            "Gladiator": "CHELLUBOINA SIRI",
            "SnowLeopards": "Rathod ChetanKumar Arvindbhai",
            "Tridents": "Patel Janmay Gaurav",
            "FireBirds": "Mohammad Kaif Mohammad Asif Memon",
            "SilverFalcons": "Vasanth Kumar Bommali",
            "BlackArchers": "Boopalli Srinidhi",
            "WarLords": "Anil Mandal",
            "DessertHawks": "Sai Charan"
        },
        {
            "Gladiator": "Sai Chandra Raju",
            "SnowLeopards": "Aryan Verma",
            "Tridents": "Ganta Naga Jaswanth",
            "FireBirds": "Shaikh Arbaz Mohd Merajalam",
            "SilverFalcons": "TALLA SAI SURYA",
            "BlackArchers": "Rajana Venkata Mohit",
            "WarLords": "Himanshu Rana",
            "DessertHawks": "Malothu Adithya Srivasthav Nayak"
        },
        {
            "Gladiator": "Akshat Kumar",
            "SnowLeopards": "Kartikeyan Rajan Kumar",
            "Tridents": "Dhananjay Abbot",
            "FireBirds": "Manohar reddy",
            "SilverFalcons": "Gauri Rajeshji Rathi",
            "BlackArchers": "Prashant Malviya",
            "WarLords": "Vivek Kushwaha",
            "DessertHawks": "PORUMAMILLA AKASH"
        },
        {
            "Gladiator": "Ankit",
            "SnowLeopards": "Ramavath Vinayak",
            "Tridents": "Seelam venkata Ravi Teja Reddy",
            "FireBirds": "Pranay Thapak",
            "SilverFalcons": "Dhiraj kumar Rabha",
            "BlackArchers": "Jangam harsha vardhan",
            "WarLords": "Matta Gnanendhra",
            "DessertHawks": "Keshav Mishra"
        },
        {
            "Gladiator": "Puneti Hemanth Kumar Reddy",
            "SnowLeopards": "V.Suneetha",
            "Tridents": "Shahid Raza",
            "FireBirds": "K R Eashwar Sai",
            "SilverFalcons": "Aayush Kumar",
            "BlackArchers": "Uttkrist Chouksey",
            "WarLords": "Nidhi Singh",
            "DessertHawks": "Manish Kumar"
        },
        {
            "Gladiator": "Prajapati Harsh Pareshkumar",
            "SnowLeopards": "Tanya Singh",
            "Tridents": "Ethamukkala Snehal",
            "FireBirds": "Ganivada Ramesh",
            "SilverFalcons": "Dani Rose J Marattukalam",
            "BlackArchers": "Saurav",
            "WarLords": "Joydeep Patar",
            "DessertHawks": "Mohd Haisam Khan"
        },
        {
            "Gladiator": "Ankit rath",
            "SnowLeopards": "MUNJAM NAVADEEP",
            "Tridents": "Manish Anil Ahire",
            "FireBirds": "Khethavath Sunil Naik",
            "SilverFalcons": "Harshwardhan kamble",
            "BlackArchers": "Daksh Thakur",
            "WarLords": "Vaishnavi Nitin Pawar",
            "DessertHawks": "Akshat Gupta"
        },
        {
            "Gladiator": "Sarthak Dhandhania",
            "SnowLeopards": "Sanapathi Rushi",
            "Tridents": "PARITOSH LAHRE",
            "FireBirds": "Dheemanth",
            "SilverFalcons": "Het Kalpeshkumar Bariya",
            "BlackArchers": "Tanmoy Bhowmick",
            "WarLords": "Devansh Sumit Tejwani",
            "DessertHawks": "Aayush"
        },
        {
            "Gladiator": "Suraj Kumar",
            "SnowLeopards": "Aryan Maurya",
            "Tridents": "Samyak Jain",
            "FireBirds": "Gurrala Hansika",
            "SilverFalcons": "Sourabh Thakur",
            "BlackArchers": "Palla Siddharth",
            "WarLords": "Akshita",
            "DessertHawks": "Bellala Sai Sampath"
        },
        {
            "Gladiator": "LAVUDYA ABHISHEK",
            "SnowLeopards": "Ojus Goel",
            "Tridents": "Rohit Raghuwanshi",
            "FireBirds": "G.jeevana",
            "SilverFalcons": "Nitin Dhankar",
            "BlackArchers": "Moyank Giri",
            "WarLords": "Anurag Sharad Patil",
            "DessertHawks": "Aman Mishra"
        },
        {
            "Gladiator": "Gangadhar",
            "SnowLeopards": "P V Damodaram",
            "Tridents": "Harsh Prashant Katole",
            "FireBirds": "BENDI VIVEK VARDHAN",
            "SilverFalcons": "Sudeep Ranjan Sahoo",
            "BlackArchers": "Sumit Kumar Pathak",
            "WarLords": "Gajanand kumawat",
            "DessertHawks": "Shivam Singh"
        },
        {
            "Gladiator": "Tanishq Gupta",
            "SnowLeopards": "SAGAR KHARE",
            "Tridents": "Khileshwar Rajpuriya",
            "FireBirds": "Dara Navya",
            "SilverFalcons": "Ayush Raj",
            "BlackArchers": "Shourya Pawan Kalbande",
            "WarLords": "Bhoomi Goyal",
            "DessertHawks": "Manish Rai"
        },
        {
            "Gladiator": "Parna Lata Chaurasia",
            "SnowLeopards": "RISHITA PANDEY",
            "Tridents": "Yannamsetti Venkata Lakshmi",
            "FireBirds": "Teesha Ramchandani",
            "SilverFalcons": "BIROJA BORO",
            "BlackArchers": "SNEHA NAGMOTI",
            "WarLords": "Mansi ambwani",
            "DessertHawks": "Sudeshna kumari"
        },
        {
            "Gladiator": "Rajavath Deekshitha",
            "SnowLeopards": "Siri chandana",
            "Tridents": "PAPPALA ANUSHA",
            "FireBirds": "Nidhi kant",
            "SilverFalcons": "Ashtha Priya",
            "BlackArchers": "Donthi Keerthi Varsha",
            "WarLords": "Aditya Kumar Yadav",
            "DessertHawks": "KRISHNA BHAWANI JHANWAR"
        },
        {
            "Gladiator": "C Smitha",
            "SnowLeopards": "Malothu likhith",
            "Tridents": "Sanjani Kumari",
            "FireBirds": "Lalit",
            "SilverFalcons": "Nellore Namratha",
            "BlackArchers": "Amathul azeez sarah",
            "WarLords": "GUGULOTH BHANU PRAKASH",
            "DessertHawks": "Vuppalapati Deepika Lakshmi Bhargavi"
        },
        {
            "Gladiator": "SYED AYAN",
            "SnowLeopards": "Praveen Kumar Verma",
            "Tridents": "Nannuri Saikamal",
            "FireBirds": "Sachin Prakash",
            "SilverFalcons": "Pratik Raj",
            "BlackArchers": "Battu Chaitanya",
            "WarLords": "Shivraj Gahir",
            "DessertHawks": "Laxman Patel"
        },
        {
            "Gladiator": "Nayan Jain",
            "SnowLeopards": "Keshav Aggarwal",
            "Tridents": "ANAND VARDHAN",
            "FireBirds": "Aarya Shadangule",
            "SilverFalcons": "Nikhil Dewangan",
            "BlackArchers": "Katragadda Ajay Rama swamy chowdary gowtham",
            "WarLords": "Kotha Bala Venkata Aditya",
            "DessertHawks": "Aryan Tiwari"
        },
        {
            "Gladiator": "Chiruvolu Nikhil",
            "SnowLeopards": "Kushagra faujdar",
            "Tridents": "Arjun dev Vishal",
            "FireBirds": "Suraj uttam gaikwad",
            "SilverFalcons": "Parth Om Sarwade",
            "BlackArchers": "Piyush Pancholi",
            "WarLords": "Ayush khelwal",
            "DessertHawks": "Anurag jaiswal"
        },
        {
            "Gladiator": "Chandra sekhar",
            "SnowLeopards": "Uplab Rajak",
            "Tridents": "Sanju hajara",
            "FireBirds": "Muttana Jashraj",
            "SilverFalcons": "Rahul Agrawal",
            "BlackArchers": "VARUN PRAJAPATI",
            "WarLords": "Shashank yadav",
            "DessertHawks": "Amit jakhar"
        },
        {
            "Gladiator": "RAVIKANTI AKSHAY",
            "SnowLeopards": "Kesav Patneedi",
            "Tridents": "Ayush kumar",
            "FireBirds": "Marodkar Vedant Bhalchandra",
            "SilverFalcons": "Kanchani Sainath Yaadv",
            "BlackArchers": "Siriki Tejaram",
            "WarLords": "Rishi Kharya",
            "DessertHawks": "Hemant kumar"
        },
        {
            "Gladiator": "Aarav Singh Parihar",
            "SnowLeopards": "Kagitha Sri Bhanu Preetham",
            "Tridents": "Pavan kumar meena",
            "FireBirds": "SLOK TULSYAN",
            "SilverFalcons": "Ankit Arya",
            "BlackArchers": "ROUNAK KUMAR GUPTA",
            "WarLords": "Shanmukha siva Venkata sai",
            "DessertHawks": "Aman"
        },
        {
            "Gladiator": "Mohit Thakre",
            "SnowLeopards": "Mohit Agarwala",
            "Tridents": "Prajwal Dilip Aher",
            "FireBirds": "Jayant Jaiswal",
            "SilverFalcons": "Badabagni Rushyendra",
            "BlackArchers": "Rahul dev reddy",
            "WarLords": "Devani Deepkumar Manishkumar",
            "DessertHawks": "Mohak"
        },
        {
            "Gladiator": "Kakarla Soma Charith Reddy",
            "SnowLeopards": "Valdas Karthik Goud",
            "Tridents": "Kandimalla Lakshmi Sai Venkat Chowdary",
            "FireBirds": "Ajmeera Shanmuk Nayak",
            "SilverFalcons": "DOSAPATI ASHIRVADHAN",
            "BlackArchers": "Vikram Abid",
            "WarLords": "M Revanth",
            "DessertHawks": "Gaurav Kumar"
        },
        {
            "Gladiator": "Yenneti Nitin Sree Venkat",
            "SnowLeopards": "Nishant Verma",
            "Tridents": "Dibakar Roy",
            "FireBirds": "Aryan Kumar",
            "SilverFalcons": "Rohan Kumar Mishra",
            "BlackArchers": "Sarthak Gopal Sharma",
            "WarLords": "Aditya Bajpai",
            "DessertHawks": "Kinshuk Gupta"
        },
        {
            "Gladiator": "Maloth Madhu",
            "SnowLeopards": "GOTTUMUKKALA SESHA ABHINAV",
            "Tridents": "shubham sahu",
            "FireBirds": "NILADR BISWAS",
            "SilverFalcons": "Arpit Bhardwaj",
            "BlackArchers": "Abhishek",
            "WarLords": "Sanjay nimroth",
            "DessertHawks": "GANTA SRUJAN"
        },
        {
            "Gladiator": "Prathmesh Mahadeo Ingale",
            "SnowLeopards": "Lakshay Gupta",
            "Tridents": "Vetsa Tarun",
            "FireBirds": "Ashish Ranjan",
            "SilverFalcons": "Sathi Gnaneswara Reddy",
            "BlackArchers": "Amritansh Ranjan",
            "WarLords": "Aditya Saini",
            "DessertHawks": "Jaswant kumar chaudhary"
        },
        {
            "Gladiator": "Pravin Arjun Shankhapal",
            "SnowLeopards": "Vishlavath Karthik",
            "Tridents": "Vellurushyam",
            "FireBirds": "Ranga Chandra Naga venkata chaitanya kumar",
            "SilverFalcons": "HIMANSHU SONI",
            "BlackArchers": "Prasanth",
            "WarLords": "Chilakamarri Lokesh",
            "DessertHawks": "Godlaveeti Venkata sai"
        },
        {
            "Gladiator": "praveen kumar",
            "SnowLeopards": "Priyanshu Kumar Gautam",
            "Tridents": "Ujjwal Raj",
            "FireBirds": "Ratlavath devendar",
            "SilverFalcons": "THUMATI HEMANTHKUMAR",
            "BlackArchers": "Aditya Narayan Thakur",
            "WarLords": "Rajeev Goel",
            "DessertHawks": "Saurav Tanwar"
        },
        {
            "Gladiator": "GALABA VAMSI",
            "SnowLeopards": "Amay Dixit",
            "Tridents": "Moka Venkata Krishna",
            "FireBirds": "Naman Sharma",
            "SilverFalcons": "Sunny Kumar",
            "BlackArchers": "Sahaj Kumar",
            "WarLords": "Kethu Shanmukha Reddy",
            "DessertHawks": "Narendra kumar"
        },
        {
            "Gladiator": "Gaurav Yogi",
            "SnowLeopards": "Jeepalyam Mukesh Reddy",
            "Tridents": "Prashant Ramtekkar",
            "FireBirds": "Lekkala Sashank",
            "SilverFalcons": "Rakshak",
            "BlackArchers": "Mutyala Venkata Vijay Bhargava",
            "WarLords": "Aditya Pramod Rehpade",
            "DessertHawks": "SEESALI. PROTHISH KUMAR AYYAPPA"
        },
        {
            "Gladiator": "Abhigyan Sharma",
            "SnowLeopards": "Saurabh Singh",
            "Tridents": "Yeresi Likith Reddy",
            "FireBirds": "Adarsh Panjwani",
            "SilverFalcons": "Avanish Kumar Mishra",
            "BlackArchers": "Parth Gulati",
            "WarLords": "Rahul Raj",
            "DessertHawks": "Kriteemoy Basu"
        },
        {
            "Gladiator": "Abhishek Singh Ghenyar",
            "SnowLeopards": "Rishabh garg",
            "Tridents": "Yeldandi Suchethan Reddy",
            "FireBirds": "Himanshu",
            "SilverFalcons": "Harsh Meena",
            "BlackArchers": "B. Hari Charan Goud",
            "WarLords": "Aditya Jha",
            "DessertHawks": "Vasu Garg"
        },
        {
            "Gladiator": "Katari Venu",
            "SnowLeopards": "Divit Sharma",
            "Tridents": "Sahaj Kumar",
            "FireBirds": "Uday bhardwaj",
            "SilverFalcons": "Pradeep J",
            "BlackArchers": "Anirudh Ranga",
            "WarLords": "Saurav Gupta",
            "DessertHawks": "Rajeev kumar"
        },
        {
            "Gladiator": "YUGANT PM GUDDHA",
            "SnowLeopards": "Shiv Ganesh",
            "Tridents": "Raju Bhukya",
            "FireBirds": "Ravindra Kasana",
            "SilverFalcons": "Mahendra kumar",
            "BlackArchers": "Vikash Meena",
            "WarLords": "Farhan Alam",
            "DessertHawks": "Ashutosh Ingle"
        },
        {
            "Gladiator": "Deva Surya Prasad",
            "SnowLeopards": "Omm Parkash Sahoo",
            "Tridents": "Darsh Mahajan",
            "FireBirds": "Jitendra Zirwar",
            "SilverFalcons": "TARIGOPULA DHARSHAN REDDY",
            "BlackArchers": "Om Anand",
            "WarLords": "Samayakj jain",
            "DessertHawks": "Anaay Sahu"
        },
        {
            "SnowLeopards": "Akshat Arora",
            "Tridents": "N Chidvilash",
            "FireBirds": "Chandauli Ajith",
            "DessertHawks": "BHASKAR PAUL"
        },
        {
            "DessertHawks": "Yogesh"
        },
        {
            "SnowLeopards": "Siddharth Jay Prakash Rai"
        }
    ]
;
    

    function arraySetter(id){
        setArr((prevValue)=>{
             return   prevValue.map((item,index)=>{
                    if(index===id){
                        return item===0?1:0;   
                }
                else{
                    return item;
                }
                })
        });
        
    }
    
    useEffect(()=>{
           for(var i=0; i<arr.length;i++){
                if(arr[i]===1){
                    document.getElementsByClassName("Team_Members_Hidden")[i].style.display="flex";
            }
            else{
                document.getElementsByClassName("Team_Members_Hidden")[i].style.display="none";
            }
        }
            

    },[arr])


   /* useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(Data);
          const reader = response.body.getReader();
          const result = await reader.read();
          const decoder = new TextDecoder("utf-8");
          const csvData = decoder.decode(result.value);
          const parsedData = Papa.parse(csvData, { 
            header: true, 
            skipEmptyLines: true 
          }).data;
          setData(parsedData);
          
        };
        fetchData();
      }, []);*/
  




    
return (
        <div className="Teams_Container">
            <h1>Prayatna Teams & Members</h1>
            <TeamsComp
                ArrSetter={arraySetter}
                id={0}
                teamName="GLADIATORS"
                captainName="Prakar Sharma"
                playerNames={data.map((item)=>{return item.Gladiator;})}
                />
            <TeamsComp
                ArrSetter={arraySetter}
                id={1}
                teamName="SNOW LEOPARDS"
                captainName="Bharath Kumar"
                playerNames={data.map((item)=>{return item.SnowLeopards;})}
            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={2}
                teamName="TRIDENTS"
                captainName="Imdadulla Khan"
                playerNames={data.map((item)=>{return item.Tridents;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={3}
                teamName="FIRE BIRDS"
                captainName="Aditi Mahajan"
                playerNames={data.map((item)=>{return item.FireBirds;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={4}
                teamName="SILVER FALCONS"
                captainName="Ansh Gangwar"
                playerNames={data.map((item)=>{return item.SilverFalcons;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={5}
                teamName="BLACK ARCHERS"
                captainName="Basant Solanky"
                playerNames={data.map((item)=>{return item.BlackArchers;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={6}
                teamName="WAR LORDS"
                captainName="Ashmesh Dawande"
                playerNames={data.map((item)=>{return item.WarLords;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={7}
                teamName="DESSERT HAWKS"
                captainName="Sanat Tudu"
                playerNames={data.map((item)=>{return item.DessertHawks;})}

            />


        </div>

);

}


export default Teams;
// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// function ProfileCard({ name, title, bio, skills, profileImageUrl }) {
//   return (
//     <Card className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl">
//       <CardHeader className="flex flex-col items-center">
//         <img
//           className="w-24 h-24 mb-3 rounded-full shadow-md transition-transform duration-500 hover:scale-110"
//           src={profileImageUrl}
//           alt={`${name}'s profile`}
//         />
//         <CardTitle className="text-xl font-semibold text-gray-900 transition-opacity duration-300 opacity-90 hover:opacity-100">
//           {name}
//         </CardTitle>
//         <CardDescription className="text-gray-600 transition-opacity duration-300 opacity-75 hover:opacity-100">
//           {title}
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p className="mt-3 text-sm text-center text-gray-700 transition-opacity duration-300 opacity-75 hover:opacity-100">
//           {bio}
//         </p>
//         <div className="flex flex-wrap mt-4 gap-2 justify-center">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-blue-200"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="flex justify-center mt-4">
//         <a href="mailto:example@example.com">
//           <Button
//             className="px-4 py-2 text-white bg-blue-600 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-blue-500/50"
//             style={{
//               boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
//               transition: "box-shadow 0.3s ease-in-out",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.boxShadow =
//                 "0 0 20px rgba(0, 0, 255, 0.7)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.boxShadow =
//                 "0 0 10px rgba(0, 0, 255, 0.5)")
//             }
//           >
//             Contact
//           </Button>
//         </a>
//       </CardFooter>
//     </Card>
//   );
// }

// export default ProfileCard;

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProfileCard({ name, title, bio, skills, profileImageUrl }) {
  return (
    <Card
      className="w-full max-w-md p-6 bg-white border-8 border-transparent rounded-lg shadow-lg bg-clip-border transition-transform duration-500 hover:scale-105 hover:shadow-xl"
      style={{
        backgroundImage: "linear-gradient(to right, #4F46E5, #3B82F6, #EC4899)",
        borderRadius: "1rem",
        borderImage: "linear-gradient(to right, #4F46E5, #3B82F6, #EC4899) 1",
      }}
    >
      <CardHeader className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-md transition-transform duration-500 hover:scale-110"
          src={profileImageUrl}
          alt={`${name}'s profile`}
        />
        <CardTitle className="text-xl font-semibold text-gray-900 transition-opacity duration-300 opacity-90 hover:opacity-100">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-900 transition-opacity duration-300 opacity-80 hover:opacity-100">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-sm text-center text-gray-900 transition-opacity duration-300 opacity-75 hover:opacity-100">
          {bio}
        </p>
        <div className="flex flex-wrap mt-4 gap-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center mt-4">
        <a href="mailto:sam@mail.com">
          <Button
            className="px-4 py-2 text-white bg-blue-600 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-blue-500/50"
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0, 0, 255, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 10px rgba(0, 0, 255, 0.5)")
            }
          >
            Contact
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;

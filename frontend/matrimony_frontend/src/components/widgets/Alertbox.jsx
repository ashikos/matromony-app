import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";


const Alertbox = ({errorMessage}) => {
  return (
    <div className={`flex justify-center ${errorMessage.message ? '': "hidden"} absolute right-[40%] bottom-[10rem]`}>
      <Alert color={errorMessage.color} icon={HiInformationCircle}>
        <div className="flex space-x-2 text-xl">
          <span className="font-medium">{errorMessage.title} </span> <h1>{errorMessage.message}</h1> 
        </div>
      </Alert>
    </div>
  )
}

export default Alertbox
"use server";

import HandleTask from "../components/handleTask";
import { toolCards } from "../components/toolCardBox";




async function Task({ params }) {

  const tool = toolCards.find((tool) => tool.toolRoute === params.task);
  return (

    <HandleTask tool={tool} />
  )

}


export default Task;
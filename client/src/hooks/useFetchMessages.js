import { useEffect, useState } from "react";
import { getAllMessages } from "../services/admin";

export default function useProjects() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessageLists] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await getAllMessages();
        console.log(response);
        setMessageLists(response?.data);
      } catch (e) {
        throw new Error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return { isLoading, messages };
}

import { useEffect, useState } from 'react';
import User from '../Connections/user';

const auth = new User();

const useUser = (server) => {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);

    if(server){
      auth.getServerUser().then( res => {
        setUser(res);
      }).catch(e => {
        if(e.response){
          if(e.response.status === 401){
            auth.signOut();
          }
        }
        setLoading(false);
      });
    }else{
      setUser(auth.getUser());
    }

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, server]);

  return [ user, loading ];
}

const useIsLogged = () => {
  const [ isLogged, setIsLogged ] = useState(true);

  useEffect(() => {
    const user = auth.getUser();

    if(!user){
      setIsLogged(false);
    }else{
      setIsLogged(true);
    }
  }, []);

  return isLogged;
}

export {
  useIsLogged,
  useUser,
}

export const GETUSER = async(url,userId, token)=>{
      try{
            const res = await fetch(
                  url + userId,
                  {
                    headers: {
                      authorization: token,
                    },
                  }
                );
                if (res.ok) {
                  let data = await res.json();
                  return data;
                }

      }catch(error){
            console.log('Error', error);
            return error
      }
}
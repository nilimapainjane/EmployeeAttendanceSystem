
export class UserRegx{

    static password(control:any)
    {
          let regx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        let valid=regx.test(control.value);
        return valid? null:{password:true}
    }


}
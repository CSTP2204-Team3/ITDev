/**
 * api interface using to catch api error
 */
export interface APIErr {
    code: number,
    message: string,
    cause:string | Error
  }
  
  /**
   * Location interface
   */
  export interface Language {
    value: string;
    name: string;
  }
  
  


export class AjaxResult<T> {
    code: string;
    msg: string;
    data: T;

    constructor(code: string, msg: string, data: T) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
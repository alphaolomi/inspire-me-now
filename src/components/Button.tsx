/**
 */
interface Props{
    children?: React.ReactNode;

}
/**
 * 
 * 
 */
export const Button: React.FC<Props> = (props) => <button type="button">{props.children}</button>
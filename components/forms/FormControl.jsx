import {cn} from '@/lib/utils/mergeCss'

function FormControl({children, className}) {
	return <div className={cn('', className)}>{children}</div>
}
export default FormControl

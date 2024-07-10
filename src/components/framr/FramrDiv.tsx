import { AnimationControls, TargetAndTransition, Transition, VariantLabels, motion } from 'framer-motion'
import { ReactNode } from 'react';

type FramrDivProps = {
    content?: string;
    className?: string;
    children?: ReactNode | undefined;
    animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined;
    transition?: Transition | undefined;
    whileTap?: TargetAndTransition | VariantLabels | undefined;
    id?;
}

const FramrDiv = ({
    content = "",
    className,
    animate,
    children,
    transition,
    whileTap, id
}: FramrDivProps) => {
    return (
        <motion.div
            id={id}
            className={className}
            animate={animate}
            transition={transition}
            whileTap={whileTap}
        >
            {content}
            {children}
        </motion.div>
    )
}

export default FramrDiv
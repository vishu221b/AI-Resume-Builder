import { AnimationControls, TargetAndTransition, Transition, VariantLabels, motion } from 'framer-motion'
import { ReactNode } from 'react';

type FramrButtonProps = {
    content?: string;
    className?: string;
    children?: ReactNode;
    animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined;
    transition?: Transition | undefined;
    whileTap?: TargetAndTransition | VariantLabels | undefined;
}

const FramrButton = ({ content = "", className, animate, children, transition, whileTap }: FramrButtonProps) => {
    return (
        <motion.button
            className={className}
            animate={animate}
            transition={transition}
            whileTap={whileTap}
        >
            {content}
            {children}
        </motion.button>
    )
}

export default FramrButton
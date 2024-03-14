import { useEffect, useRef, useState } from "react";

const useInView = () => {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	const callback: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			setInView(entry.isIntersecting);
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callback);
		const currentRef = ref.current;

		if (currentRef) observer.observe(currentRef);

		return () => observer.disconnect();
	}, [ref]);

	return { inView, ref };
};

export default useInView;

export const unobserve = (element, instance) => {
    if (!instance) return;
    const observer = instance._observer;
    if (!observer) return;
    observer.unobserve(element);
};

export const resetObserver = (observer) => {
    observer.disconnect();
};
const useCountStore = () => {
    let count = $state(0);
  
    return {
      get count() {
        return count;
      },
      increment: () => count++,
    };
  };
  
  export { useCountStore };
  
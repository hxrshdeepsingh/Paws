function useInfo() {
    let info = localStorage.getItem("userInfo");
    info = JSON.parse(info);
    return info;
}

export default useInfo
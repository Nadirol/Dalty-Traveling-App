const Footer = ({ theme }) => {
    return (
        <footer className="flex flex-col md:flex-row justify-between py-12 md:py-[84px] w-container mx-auto">
            <div className="flex flex-col justify-between items-center md:items-start mb-8 md:mb-0">
                <div className="">
                    <img src={process.env.PUBLIC_URL + `/images/${theme === 'light' ? 'Logo' : 'Logo yellow'}.svg`} alt="brand logo" className="mb-5 mx-auto md:mx-0"/>
                    <h3 className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-base md:w-3/4 mb-4 md:mb-0">Enjoy the touring with Dalty</h3>
                </div>
                <div className="flex gap-[14px]">
                    <button className="px-[13px] py-2.5 social-logo">
                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8946 12V6.79818H5.66358L5.92842 4.57604H3.89454V3.15731C3.89454 2.51396 4.05966 2.07554 4.91244 2.07554L6 2.07499V0.087552C5.8119 0.060516 5.16624 0 4.41522 0C2.84706 0 1.77352 1.03554 1.77352 2.93731V4.57604H0V6.79818H1.77352V11.9999L3.8946 12Z" fill="#5B5F62"/>
                        </svg>
                    </button>
                    <button className="p-2.5 social-logo">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.07003 0.315027C2.45122 0.166707 2.8877 0.0654267 3.52646 0.0363334C4.16657 0.00676674 4.37125 0 6.00073 0C7.6302 0 7.83473 0.00724674 8.47447 0.0363334C9.1128 0.0649467 9.549 0.166707 9.93093 0.315027C10.325 0.468193 10.6599 0.673153 10.9933 1.00709C11.3268 1.34103 11.5319 1.67544 11.6855 2.06995C11.8338 2.45112 11.9351 2.88753 11.9641 3.52632C11.9932 4.16607 12 4.37059 12 6C12 7.6294 11.9932 7.83347 11.9641 8.47367C11.9355 9.1124 11.8338 9.54867 11.6855 9.93007C11.5319 10.3245 11.3273 10.6595 10.9933 10.9929C10.6594 11.3263 10.325 11.5314 9.93047 11.685C9.549 11.8333 9.1128 11.9346 8.474 11.9637C7.83427 11.9932 7.62973 12 6.00027 12C4.37077 12 4.16657 11.9927 3.52646 11.9637C2.8877 11.9346 2.45194 11.8333 2.07003 11.685C1.67527 11.5314 1.34103 11.3262 1.00713 10.9929C0.673227 10.6597 0.468213 10.3245 0.315033 9.93007C0.166713 9.54867 0.0654267 9.11247 0.0363401 8.47367C0.00676674 7.83393 0 7.6294 0 6C0 4.37059 0.00676674 4.16607 0.0363401 3.52632C0.0654267 2.88759 0.166713 2.45136 0.315033 2.06995C0.468213 1.6752 0.67318 1.34049 1.00713 1.00709C1.34108 0.67368 1.67527 0.468193 2.07003 0.315027ZM5.99967 4C4.89527 4 4 4.89547 4 6C4 7.10453 4.89527 8 5.99967 8C7.10433 8 8 7.10433 8 6C8 4.89567 7.10433 4 5.99967 4ZM2.66667 6C2.66667 4.15936 4.15859 2.66667 5.99967 2.66667C7.84053 2.66667 9.33333 4.15915 9.33333 6C9.33333 7.84087 7.84053 9.33333 5.99967 9.33333C4.15859 9.33333 2.66667 7.84067 2.66667 6ZM10 2.66667C10.3682 2.66667 10.6667 2.36819 10.6667 2C10.6667 1.63181 10.3682 1.33333 10 1.33333C9.6318 1.33333 9.33333 1.63181 9.33333 2C9.33333 2.36819 9.6318 2.66667 10 2.66667Z" fill="#5B5F62"/>
                        </svg>
                    </button>
                    <button className="px-[9px] py-2.5 social-logo">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0226 0.00266254V0H10.7259L10.9829 0.0506101C11.1542 0.0834676 11.3098 0.126525 11.4495 0.179797C11.5893 0.233077 11.7245 0.29523 11.8552 0.366262C11.986 0.437287 12.1046 0.509663 12.2111 0.58335C12.3165 0.656168 12.4112 0.73341 12.4951 0.815093C12.578 0.897668 12.7074 0.918983 12.8832 0.879022C13.0591 0.83907 13.2485 0.78357 13.4513 0.712545C13.6542 0.641512 13.8548 0.5616 14.0532 0.472808C14.2516 0.384015 14.3724 0.327638 14.4157 0.30366C14.458 0.278813 14.4806 0.265493 14.4833 0.263708L14.486 0.25971L14.4995 0.25305L14.5131 0.24639L14.5266 0.23973L14.5401 0.233078L14.5428 0.22908L14.5469 0.226417L14.551 0.223755L14.5537 0.219758L14.5672 0.21576L14.5807 0.213098L14.578 0.233078L14.5739 0.25305L14.5672 0.27303L14.5604 0.29301L14.5537 0.30633L14.5469 0.319642L14.5401 0.339622C14.5356 0.352942 14.5311 0.370695 14.5266 0.392895C14.5221 0.415102 14.4793 0.50388 14.3981 0.659265C14.317 0.814658 14.2155 0.972255 14.0938 1.13207C13.9721 1.2919 13.8629 1.41265 13.7665 1.49434C13.6691 1.57691 13.6046 1.63462 13.5731 1.66748C13.5415 1.70122 13.5031 1.73229 13.4581 1.76071L13.3904 1.80466L13.3769 1.81132L13.3634 1.81798L13.3607 1.82197L13.3566 1.82464L13.3526 1.8273L13.3499 1.8313L13.3363 1.83796L13.3228 1.84462L13.3202 1.84861L13.316 1.85128L13.312 1.85394L13.3093 1.85794L13.3066 1.86193L13.3025 1.8646L13.2985 1.86726L13.2958 1.87126H13.3634L13.7421 1.79135C13.9946 1.73807 14.2358 1.6737 14.4657 1.59823L14.8309 1.47835L14.8715 1.46504L14.8918 1.45838L14.9053 1.45172L14.9188 1.44506L14.9324 1.4384L14.9459 1.43174L14.9729 1.42774L15 1.42508V1.45172L14.9932 1.45438L14.9865 1.45838L14.9838 1.46237L14.9797 1.46504L14.9756 1.46771L14.9729 1.47169L14.9702 1.47569L14.9662 1.47835L14.9621 1.48102L14.9594 1.48502L14.9567 1.48901L14.9527 1.49168L14.9459 1.50499L14.9391 1.51831L14.9351 1.52098C14.9333 1.52364 14.876 1.59911 14.7633 1.7474C14.6506 1.89656 14.5898 1.97202 14.5807 1.97381C14.5717 1.97647 14.5591 1.98979 14.5428 2.01376C14.5275 2.03861 14.432 2.13763 14.2561 2.31076C14.0803 2.48391 13.9081 2.63795 13.7394 2.77292C13.5699 2.90877 13.4843 3.07569 13.4825 3.2737C13.4798 3.47081 13.4693 3.69368 13.4513 3.94229C13.4333 4.1909 13.3995 4.45949 13.3499 4.74802C13.3003 5.03662 13.2236 5.36295 13.1199 5.727C13.0163 6.09097 12.89 6.44617 12.7412 6.79245C12.5924 7.13872 12.4369 7.44952 12.2746 7.72477C12.1123 8.00002 11.9635 8.23305 11.8282 8.424C11.693 8.61487 11.5555 8.79465 11.4157 8.9634C11.2759 9.13207 11.0992 9.32213 10.8855 9.5334C10.6708 9.74385 10.5537 9.85927 10.5338 9.87967C10.5131 9.89925 10.4247 9.97207 10.2687 10.0981C10.1136 10.225 9.9468 10.352 9.76822 10.479C9.59062 10.6051 9.42743 10.7103 9.27863 10.7947C9.12982 10.8791 8.95043 10.9754 8.74027 11.0837C8.5311 11.1929 8.30475 11.2941 8.0613 11.3873C7.81785 11.4805 7.5609 11.5672 7.29037 11.647C7.01985 11.727 6.75833 11.7891 6.50588 11.8335C6.25343 11.8779 5.96709 11.9156 5.64698 11.9468L5.16682 11.9933V12H4.28764V11.9933L4.17268 11.9867C4.09604 11.9822 4.03292 11.9778 3.98332 11.9734C3.93373 11.969 3.74662 11.9445 3.422 11.9001C3.09739 11.8557 2.84266 11.8113 2.6578 11.7669C2.47296 11.7225 2.19793 11.6382 1.83273 11.5139C1.46754 11.3896 1.1551 11.264 0.895403 11.137C0.636615 11.0109 0.474308 10.931 0.408473 10.8972C0.343553 10.8644 0.270518 10.8236 0.18936 10.7747L0.0676274 10.7015L0.064935 10.6975L0.0608625 10.6948L0.0568051 10.6922L0.054105 10.6881L0.040575 10.6815L0.0270526 10.6748L0.02436 10.6708L0.0202875 10.6681L0.01623 10.6655L0.0135224 10.6615L0.0108376 10.6575L0.00676507 10.6548H0V10.6282L0.0135224 10.6309L0.0270526 10.6348L0.0879149 10.6415C0.128497 10.6459 0.238958 10.6526 0.419295 10.6615C0.599648 10.6704 0.79125 10.6704 0.99414 10.6615C1.19702 10.6526 1.40443 10.6326 1.61632 10.6016C1.82823 10.5705 2.07845 10.5172 2.367 10.4417C2.65556 10.3663 2.92066 10.2766 3.16232 10.1727C3.40308 10.0679 3.57439 9.98978 3.6763 9.93833C3.77729 9.8877 3.93148 9.79357 4.13887 9.65595L4.44995 9.44948L4.45266 9.4455L4.45672 9.44287L4.46079 9.44018L4.46348 9.4362L4.46618 9.43215L4.47024 9.42953L4.47431 9.42682L4.47701 9.42285L4.49053 9.41887L4.50406 9.41617L4.50676 9.4029L4.51082 9.38955L4.5149 9.38692L4.51758 9.38288L4.40938 9.37627C4.33724 9.37185 4.26736 9.36735 4.19973 9.36292C4.1321 9.3585 4.02616 9.33855 3.88187 9.303C3.73761 9.26745 3.58207 9.2142 3.41524 9.14318C3.24843 9.07215 3.08611 8.98777 2.92831 8.89013C2.77052 8.79248 2.65645 8.71117 2.58611 8.64637C2.51669 8.58247 2.42651 8.49187 2.3156 8.37473C2.20559 8.2566 2.11001 8.1354 2.02886 8.01113C1.9477 7.88678 1.87015 7.74337 1.79623 7.58092L1.68395 7.33853L1.67719 7.3185L1.67042 7.29855L1.66636 7.28528L1.66366 7.27192L1.68395 7.27455L1.70424 7.2786L1.85302 7.29855C1.95222 7.3119 2.10776 7.31632 2.31966 7.3119C2.53156 7.30748 2.67808 7.29855 2.75924 7.28528C2.8404 7.27193 2.89 7.263 2.90803 7.25857L2.93508 7.25198L2.96889 7.2453L3.00271 7.23862L3.00541 7.23465L3.00946 7.23195L3.01354 7.22933L3.01623 7.22528L2.98918 7.21867L2.96213 7.212L2.93508 7.20532L2.90803 7.19865L2.88098 7.19198C2.86295 7.18755 2.83139 7.1787 2.7863 7.16535C2.74121 7.15207 2.61948 7.10325 2.4211 7.01887C2.22273 6.9345 2.06493 6.85238 1.9477 6.7725C1.83018 6.69232 1.71813 6.60465 1.61226 6.51008C1.50677 6.41423 1.3909 6.29077 1.26465 6.13987C1.13842 5.9889 1.02571 5.81355 0.926512 5.61375C0.827325 5.41395 0.752932 5.22308 0.703335 5.04105C0.65394 4.86007 0.621345 4.67513 0.605963 4.48835L0.581603 4.20865L0.595132 4.21132L0.608655 4.21532L0.622185 4.22198L0.635707 4.22863L0.64923 4.2353L0.66276 4.24195L0.872407 4.33518C1.01218 4.39734 1.18576 4.45061 1.39315 4.495C1.60055 4.53937 1.72453 4.56382 1.7651 4.56825L1.82597 4.57493H1.9477L1.94501 4.57095L1.94094 4.56825L1.93688 4.56562L1.93417 4.56157L1.93148 4.5576L1.92741 4.55498L1.92335 4.55228L1.92065 4.5483L1.90712 4.54163L1.8936 4.53495L1.89091 4.53097L1.88683 4.52827L1.88278 4.52565L1.88007 4.52168L1.86655 4.515L1.85302 4.50832L1.85033 4.50435C1.84763 4.50255 1.80884 4.47413 1.73399 4.41909C1.66005 4.36316 1.58251 4.2908 1.50135 4.20199C1.4202 4.1132 1.33904 4.01997 1.25789 3.92231C1.17659 3.82442 1.10417 3.71969 1.04148 3.60932C0.978367 3.49834 0.911633 3.35715 0.841298 3.1858C0.77187 3.01532 0.719122 2.84351 0.683047 2.67037C0.646987 2.49722 0.6267 2.32631 0.622185 2.1576C0.617678 1.9889 0.622185 1.84462 0.635707 1.72475C0.64923 1.60488 0.676283 1.46948 0.716865 1.31854C0.75744 1.16759 0.81606 1.00778 0.892695 0.83907L1.00766 0.586013L1.01443 0.56604L1.02119 0.54606L1.02526 0.543398L1.02795 0.5394L1.03066 0.535403L1.03472 0.53274L1.03879 0.535403L1.04148 0.5394L1.04419 0.543398L1.04824 0.54606L1.05231 0.548722L1.055 0.55272L1.05771 0.556718L1.06177 0.55938L1.06853 0.5727L1.07529 0.586013L1.07936 0.588683L1.08205 0.592672L1.26465 0.79245C1.38638 0.925635 1.53066 1.07437 1.69747 1.23863C1.8643 1.40288 1.95672 1.48812 1.97475 1.49434C1.99279 1.50144 2.01533 1.52185 2.04238 1.55561C2.06943 1.58846 2.15961 1.66704 2.31289 1.79135C2.46619 1.91564 2.66682 2.05994 2.91479 2.22419C3.16277 2.38845 3.43778 2.5505 3.73985 2.71032C4.04194 2.87015 4.36655 3.01442 4.71371 3.14317C5.06087 3.27193 5.30433 3.35627 5.44409 3.39623C5.58387 3.43619 5.82281 3.48723 6.16095 3.54939C6.49912 3.61155 6.75382 3.6515 6.92512 3.66925C7.0965 3.68701 7.21373 3.69722 7.2768 3.69989L7.37152 3.70255L7.36882 3.68257L7.36478 3.6626L7.3377 3.49612C7.31962 3.38513 7.31063 3.22975 7.31063 3.02997C7.31063 2.83019 7.32645 2.64596 7.35795 2.47725C7.38953 2.30854 7.43692 2.13763 7.5 1.96448C7.56315 1.79134 7.62488 1.65238 7.68532 1.54762C7.7466 1.44373 7.82685 1.3252 7.92607 1.19201C8.02522 1.05882 8.15378 0.921202 8.31157 0.779137C8.46937 0.637065 8.64968 0.51054 8.85255 0.399555C9.05542 0.28857 9.24255 0.20421 9.41385 0.146505C9.58523 0.0887926 9.72952 0.0510527 9.84667 0.0333002C9.9639 0.0155402 10.0226 0.00532504 10.0226 0.00266254Z" fill="#5B5F62"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex gap-12 xl:gap-[120px] justify-between flex-wrap md:flex-nowrap">
                <ul>
                    <h1 className="footer-heading">Resources</h1>
                    <li className="footer-link">Download</li>
                    <li className="footer-link" >Help Center</li>
                    <li className="footer-link" >Guide Book</li>
                    <li className="footer-link" >App Directory</li>
                </ul>
                <ul>
                    <h1 className="footer-heading">Travellers</h1>
                    <li className="footer-link" >Why Travellers</li>
                    <li className="footer-link" >Enterprice</li>
                    <li className="footer-link" >Customer Stories</li>
                    <li className="footer-link" >Instagram post</li>
                </ul>
                <ul>
                    <h1 className="footer-heading">Company</h1>
                    <li className="footer-link" >Traveling</li>
                    <li className="footer-link" >About Locato</li>
                    <li className="footer-link" >Success</li>
                    <li className="footer-link" >Information</li>
                </ul>
                <ul>
                    <h1 className="footer-heading">Get App</h1>
                    <li className="footer-link" >App Store</li>
                    <li className="footer-link" >Google Play Store</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
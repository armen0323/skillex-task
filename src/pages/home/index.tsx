import styles from './styles.module.scss'
import {MainLayout} from "../../layout";
import {CheckboxGroup, ColorPickerGroup, Icon, Phone, RightSidebar} from "components";
import {colors, operationSystems, phoneOptions, ratingOptions, specialOptions} from "./utils";
import {FC, useState, useEffect} from "react";
import useGetData from "./_services/useGetData";
import PriceRange from "../../components/atom/price-range";
import {TFilterData} from "../../utils/globalTypes";
import useDynamicQuery from "../../hooks/useUrlSync";
import {Spin} from "antd";
import {useWindowSize} from "react-use";

const Home: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const {options, setOptions} = useDynamicQuery()
    const {width} = useWindowSize()
    const initialFilters = {
        colors: [],
        brand: [],
        price: [],
        special_offer: [],
        os: [],
        rating: []
    }
    const [filters, setFilters] = useState<TFilterData>()
    const {data,isLoading} = useGetData(filters as TFilterData)


    useEffect(() => {
        filters && setOptions({filters: filters ? JSON.stringify(filters) : undefined})
    }, [filters]);

    const parsedFilters = typeof options?.filters === "string" ? JSON.parse(options?.filters) : []

    return <MainLayout>
        {width <= 1050 && (
            <>
                <div className={styles.menu} onClick={toggleSidebar} role={'button'}>
                    <Icon icon={'IconMenu'}/>
                </div>

            </>

        )}
        <RightSidebar isOpen={isSidebarOpen} onClose={toggleSidebar}>
            <div className={styles.filters}>
                <PriceRange label={"Գին"} setFilters={setFilters} filters={filters}/>
                <CheckboxGroup label={'Բրենդեր'} items={phoneOptions} query="brand" setFilters={setFilters}
                               filters={filters} defaultValue={parsedFilters?.brand}/>
                <CheckboxGroup label={'Հատուկ առաջարկներ'} items={specialOptions} query={"special_offer"}
                               setFilters={setFilters} filters={filters} defaultValue={parsedFilters?.special_offer}/>
                <CheckboxGroup label={'Վարկանիշ'} items={ratingOptions} query={"rating"} setFilters={setFilters}
                               filters={filters} defaultValue={parsedFilters?.rating}/>
                <ColorPickerGroup items={colors} label={'Առկա գույներ'} setFilters={setFilters} filters={filters}/>
                <CheckboxGroup label={'Օպերացիոն համակարգ'} items={operationSystems} query={"os"}
                               setFilters={setFilters} filters={filters} defaultValue={parsedFilters?.os}/>
            </div>
        </RightSidebar>
        <div className={styles.wrapper}>
            <p className={styles.text}>Հեռախոսներ</p>
            <div className={styles.block}>
                <div className={styles.filters}>
                    <PriceRange label={"Գին"} setFilters={setFilters} filters={filters}/>
                    <CheckboxGroup label={'Բրենդեր'} items={phoneOptions} query="brand" setFilters={setFilters}
                                   filters={filters} defaultValue={parsedFilters?.brand}/>
                    <CheckboxGroup label={'Հատուկ առաջարկներ'} items={specialOptions} query={"special_offer"}
                                   setFilters={setFilters} filters={filters}
                                   defaultValue={parsedFilters?.special_offer}/>
                    <CheckboxGroup label={'Վարկանիշ'} items={ratingOptions} query={"rating"} setFilters={setFilters}
                                   filters={filters} defaultValue={parsedFilters?.rating}/>
                    <ColorPickerGroup items={colors} label={'Առկա գույներ'} setFilters={setFilters} filters={filters}/>
                    <CheckboxGroup label={'Օպերացիոն համակարգ'} items={operationSystems} query={"os"}
                                   setFilters={setFilters} filters={filters} defaultValue={parsedFilters?.os}/>
                </div>


                <div className={styles.container}>
                    {
                        !isLoading ? <>
                            { data?.length ? data.map(element => {
                                return <Phone key={element.id} name={element.name} rating={element.rating} color={element.color}
                                              price={element.price} hasGift={element?.hasGift} hasDiscount={element?.hasDiscount}/>
                            }) :null
                            }
                        </> : <div className={styles.loading}><Spin/></div>
                    }
                    {
                        !isLoading && !data?.length ? <p>Ուշադրություն Տվյալ պայմաններով ապրանքներ առկա չեն
                        </p> : null
                    }
                </div>
            </div>
        </div>
    </MainLayout>
}

export default Home
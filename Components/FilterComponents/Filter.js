import {Text, View, StyleSheet, FlatList} from "react-native";
import ColorPalette from "../../assets/ColorPalette";
import AllFilters from "./AllFilters";


export default function Filter() {

    const showAllFilterOptions = () => {
        return (
            <FlatList
                ListHeaderComponent={
                    <View style={styles.filters}>
                        {/*<AddressSearch changeCity={changeCityLocally}/>*/}
                        <AllFilters/>
                    </View>
                }
                // ListFooterComponent={
                //     <View style={styles.interests}>
                //         <InterestsPicker setFullInterestsPickerOpen={setFullInterestsPickerOpen}/>
                //     </View>}
                data={[]} renderItem={() => <></>}>
            </FlatList>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.filterText}>Filter</Text>
                <Text style={styles.clearText}>Clear</Text>
            </View>
            {showAllFilterOptions()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalette.white,
        height: 450,
        width: '100%',
        position: "absolute",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        bottom: 0,
        paddingHorizontal: 20
    },
    topSection: {
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: '4.5%'
    },
    filterText: {
        fontSize: 25,
        fontWeight: "bold",
        color: ColorPalette.orange
    },
    clearText: {
        fontSize: 20,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 20,
        color: ColorPalette.darkgrey
    },
    filters: {
        top: 10,
    }
});

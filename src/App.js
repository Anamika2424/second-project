import './App.css';

function App() {
    let array = [2, 4, 6, 7, 8, 9];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>

            {array.map((singleElement) => {
                return <div>
                    {
                        numbers.map((sequenceOfNumbers) => {
                            return <span> {singleElement * sequenceOfNumbers}</span>
                        }
                        )
                    }
                </div>
            })
            }
        </div>

    )
}
export default App;
